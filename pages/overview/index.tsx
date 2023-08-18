import NavLayout from '@/components/layouts/nav_layout';
import DesktopHeader from '@/components/header/header_desktop';

const index = () => {
  return (
    <NavLayout>
      <div className="p-10">
        <DesktopHeader
          label="Overview"
          userName="Jones Ferdinand"
          userImg="https://s3-alpha-sig.figma.com/img/35b3/2335/854ac739a1a54b9219037b25b41868ec?Expires=1693180800&Signature=GyI6qIZHaEP6BgnSHk0fiaJOX~fpiyoz2rMw4QbUcsazqUMdBKITeSjzcyXTvzYeIGHpx-LeFll1cfBNPNMII9JnriBTcA-zXwJI6XVmw1M4tqT1fJxRQc0LVPse5JOhuUlJivKEQyUzHUk8T792w86JA1~p9kDWdXmwpuZ3QMxTzJd1C-UbYjVed7t7Uka6JSz8ATL6CxwQh1OfIstWWKOt07d6tFkF7z1TAGsmGq9oPu1jZYQs0H1-unO5qTwuH1U2l0NmFjEKij~A-VpTr6uBWWiQ6VQXCDnBH7ucnMPrubSFCH2t1~9PjupdafOPDSa~bUNtnCaAxfjXrpfHxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
      </div>
    </NavLayout>
  );
};

export default index;
