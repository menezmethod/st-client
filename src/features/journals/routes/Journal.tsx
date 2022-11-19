import { useParams } from 'react-router-dom';

import { Spinner, MDPreview } from '@/components/Elements';
import { Head } from '@/components/Head';
import { ContentLayout } from '@/components/Layout';
import { Trades } from '@/features/trades';
import { formatDate } from '@/utils/format';

import { useJournal } from '../api/getJournal';
import { UpdateJournal } from '../components/UpdateJournal';

export const Journal = () => {
  const { journalId } = useParams();
  const { data, isLoading } = useJournal({ journalId });

  if (isLoading) {
    return (
      <div className="w-full h-48 flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!data) return null;

  return (
    <>
      <Head title={data.name} />
      <ContentLayout title={data.name}>
        <span className="text-xs font-bold">{formatDate(data.createdAt)}</span>
        <div className="mt-6 flex flex-col space-y-16">
          <div className="flex justify-end">
            <UpdateJournal journalId={journalId} />
          </div>
          <div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <div className="mt-1 max-w-2xl text-sm text-gray-500">
                  <MDPreview value={data.description} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Trades journalId={journalId} />
          </div>
        </div>
      </ContentLayout>
    </>
  );
};
