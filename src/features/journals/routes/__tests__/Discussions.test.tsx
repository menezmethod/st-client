import { journalGenerator } from '@/test/data-generators';
import { render, screen, userEvent, waitFor, within } from '@/test/test-utils';
import { formatDate } from '@/utils/format';

import { Journals } from '../Journals';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  (console.error as jest.Mock).mockRestore();
});

test('should create, render and delete journals', async () => {
  await render(<Journals />);

  const newJournal = journalGenerator();

  expect(await screen.findByText(/no entries/i)).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: /create journal/i }));

  const drawer = screen.getByRole('dialog', {
    name: /create journal/i,
  });

  const titleField = within(drawer).getByText(/title/i);
  const bodyField = within(drawer).getByText(/body/i);

  userEvent.type(titleField, newJournal.title);
  userEvent.type(bodyField, newJournal.body);

  const submitButton = within(drawer).getByRole('button', {
    name: /submit/i,
  });

  userEvent.click(submitButton);

  await waitFor(() => expect(drawer).not.toBeInTheDocument());

  const row = screen.getByRole('row', {
    name: `${newJournal.title} ${formatDate(newJournal.createdAt)} View Delete Journal`,
  });

  expect(
    within(row).getByRole('cell', {
      name: newJournal.title,
    })
  ).toBeInTheDocument();

  userEvent.click(
    within(row).getByRole('button', {
      name: /delete journal/i,
    })
  );

  const confirmationDialog = screen.getByRole('dialog', {
    name: /delete journal/i,
  });

  const confirmationDeleteButton = within(confirmationDialog).getByRole('button', {
    name: /delete journal/i,
  });

  userEvent.click(confirmationDeleteButton);

  await screen.findByText(/journal deleted/i);

  expect(
    within(row).queryByRole('cell', {
      name: newJournal.title,
    })
  ).not.toBeInTheDocument();
});
