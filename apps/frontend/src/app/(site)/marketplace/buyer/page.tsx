import { Buyer } from '@gitroom/frontend/components/marketplace/buyer';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'Instant' : 'Spur'} Marketplace`,
  description: '',
};
export default async function Index({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  return <Buyer />;
}
