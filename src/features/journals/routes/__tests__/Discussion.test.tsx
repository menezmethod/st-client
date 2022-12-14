import { useParams as useMockParams } from 'react-router-dom';

import {
  render,
  screen,
  userEvent,
  waitFor,
  createJournal,
  createUser,
  within,
} from '@/test/test-utils';

import { Journal } from '../Journal';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // keep the rest of the exports intact
  useParams: jest.fn(),
}));

const renderJournal = async () => {
  const fakeUser = await createUser();
  const fakeJournal = await createJournal();

  (useMockParams as jest.Mock).mockImplementation(() => ({
    journalId: fakeJournal.id,
  }));

  const utils = await render(<Journal />, {
    user: fakeUser,
  });

  await screen.findByText(fakeJournal.title);

  return {
    ...utils,
    fakeUser,
    fakeJournal,
  };
};

test('should render journal', async () => {
  const { fakeJournal } = await renderJournal();
  expect(screen.getByText(fakeJournal.body)).toBeInTheDocument();
});

test('should update journal', async () => {
  const { fakeJournal } = await renderJournal();

  const titleUpdate = '-Updated';
  const bodyUpdate = '-Updated';

  userEvent.click(screen.getByRole('button', { name: /update journal/i }));

  const drawer = screen.getByRole('dialog', {
    name: /update journal/i,
  });

  const titleField = within(drawer).getByText(/title/i);
  const bodyField = within(drawer).getByText(/body/i);

  userEvent.type(titleField, titleUpdate);
  userEvent.type(bodyField, bodyUpdate);

  const submitButton = within(drawer).getByRole('button', {
    name: /submit/i,
  });

  userEvent.click(submitButton);

  await waitFor(() => expect(drawer).not.toBeInTheDocument());

  const newTitle = `${fakeJournal.title}${titleUpdate}`;
  const newBody = `${fakeJournal.body}${bodyUpdate}`;

  expect(screen.getByText(newTitle)).toBeInTheDocument();
  expect(screen.getByText(newBody)).toBeInTheDocument();
});

test('should create and delete a comment on the journal', async () => {
  await renderJournal();

  const comment = 'Hello World';

  userEvent.click(screen.getByRole('button', { name: /create comment/i }));

  const drawer = screen.getByRole('dialog', {
    name: /create comment/i,
  });

  const bodyField = within(drawer).getByText(/body/i);

  userEvent.type(bodyField, comment);

  const submitButton = within(drawer).getByRole('button', {
    name: /submit/i,
  });

  userEvent.click(submitButton);

  await waitFor(() => expect(drawer).not.toBeInTheDocument());

  const commentsList = screen.getByRole('list', {
    name: 'comments',
  });

  const commentElements = within(commentsList).getAllByRole('listitem');

  const commentElement = commentElements[0];

  expect(commentElement).toBeInTheDocument();

  const deleteCommentButton = within(commentElement).getByRole('button', {
    name: /delete comment/i,
    exact: false,
  });

  userEvent.click(deleteCommentButton);

  const confirmationDialog = screen.getByRole('dialog', {
    name: /delete comment/i,
  });

  const confirmationDeleteButton = within(confirmationDialog).getByRole('button', {
    name: /delete/i,
  });

  userEvent.click(confirmationDeleteButton);

  await screen.findByText(/comment deleted/i);

  expect(within(commentsList).queryByText(comment)).not.toBeInTheDocument();
});
