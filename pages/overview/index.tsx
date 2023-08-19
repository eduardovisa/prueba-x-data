import { trendsData } from '@/utils/data/overview/trends';
import { simpleCardsData } from '@/utils/data/overview/simple_cards_data';
import Trends from '@/components/overview/trends';
import SimpleCards from '@/components/overview/simple_cards';
import ContentLayout from '@/components/layouts/content_layout';
import Tickets from '@/components/overview/tickets';
import { ticketsData } from '@/utils/data/overview/tickets';
import Tasks from '@/components/overview/tasks';
import { tasksData } from '@/utils/data/overview/tasks';

const index = () => {
  return (
    <ContentLayout
      label="Overview"
      userName="Jones Ferdinand"
      userImg="https://s3-alpha-sig.figma.com/img/35b3/2335/854ac739a1a54b9219037b25b41868ec?Expires=1693180800&Signature=GyI6qIZHaEP6BgnSHk0fiaJOX~fpiyoz2rMw4QbUcsazqUMdBKITeSjzcyXTvzYeIGHpx-LeFll1cfBNPNMII9JnriBTcA-zXwJI6XVmw1M4tqT1fJxRQc0LVPse5JOhuUlJivKEQyUzHUk8T792w86JA1~p9kDWdXmwpuZ3QMxTzJd1C-UbYjVed7t7Uka6JSz8ATL6CxwQh1OfIstWWKOt07d6tFkF7z1TAGsmGq9oPu1jZYQs0H1-unO5qTwuH1U2l0NmFjEKij~A-VpTr6uBWWiQ6VQXCDnBH7ucnMPrubSFCH2t1~9PjupdafOPDSa~bUNtnCaAxfjXrpfHxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    >
      <SimpleCards data={simpleCardsData} />
      <Trends data={trendsData} />
      <div className="mt-10 mb-10 sm:mb-0 grid gap-4 grid-cols-1 lg:grid-cols-2">
        <div>
          <Tickets data={ticketsData} />
        </div>
        <div>
          <Tasks data={tasksData} />
        </div>
      </div>
    </ContentLayout>
  );
};

export default index;
