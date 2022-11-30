import { Link, Spinner, Table } from '@/components/Elements';
import { Journal } from '@/features/journals';
import { formatDateShort } from '@/utils/format';

import { useJournals } from '../api/getJournals';

import { DeleteJournal } from './DeleteJournal';

export const JournalsList = () => {
  const journalsQuery = useJournals();

  if (journalsQuery.isLoading) {
    return (
      <div className="w-full h-48 flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!journalsQuery.data) return null;

  return (
    <Table<Journal>
      data={journalsQuery.data}
      columns={[
        {
          title: 'Name',
          field: 'name',
          Cell({ entry: { name, id } }) {
            return (
              <span>
                <Link to={`./${id}`}>{name}</Link>
              </span>
            );
          },
        },
        {
          title: 'Description',
          field: 'description',
          Cell({ entry: { description } }) {
            return <span>{description}</span>;
          },
        },
        {
          title: 'Start Date',
          field: 'startDate',
          Cell({ entry: { startDate } }) {
            return <span>{formatDateShort(startDate)}</span>;
          },
        },
        {
          title: 'End Date',
          field: 'endDate',
          Cell({ entry: { endDate } }) {
            return <span>{formatDateShort(endDate)}</span>;
          },
        },
        {
          title: '',
          field: 'id',
          Cell({ entry: { id } }) {
            return <DeleteJournal id={id} />;
          },
        },
      ]}
    />
  );
};
