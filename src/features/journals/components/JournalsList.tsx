import { Link, Spinner, Table } from '@/components/Elements';
import { Journal } from '@/features/journals';
import { formatDate } from '@/utils/format';

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
          title: 'Title',
          field: 'title',
        },
        {
          title: 'Created At',
          field: 'createdAt',
          Cell({ entry: { createdAt } }) {
            return <span>{formatDate(createdAt)}</span>;
          },
        },
        {
          title: '',
          field: 'id',
          Cell({ entry: { id } }) {
            return <Link to={`./${id}`}>View</Link>;
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
