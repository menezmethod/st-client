import { ContentLayout } from '@/components/Layout';

import { CreateJournal } from '../components/CreateJournal';
import { JournalsList } from '../components/JournalsList';

export const Journals = () => {
  return (
    <ContentLayout title="Journals">
      <div className="flex justify-end">
        <CreateJournal />
      </div>
      <div className="mt-4">
        <JournalsList />
      </div>
    </ContentLayout>
  );
};
