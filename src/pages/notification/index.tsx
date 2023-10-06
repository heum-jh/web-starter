import NotificationCard from "src/components/notification/card";
import { NextPageWithLayout } from "src/pages/_app";

const NotificationPage: NextPageWithLayout = () => {
  const data = Array.from({ length: 3 });
  return (
    <ul className="flex h-full flex-col bg-[#F5F6F8]">
      {data.length > 0 ? (
        <>
          {data.map((_, i) => {
            return <NotificationCard key={i}></NotificationCard>;
          })}
          <p className="py-[0.87rem] text-center text-sm font-medium text-[#C3C7D0]">
            최근 30일 동안의 알림만 확인할 수 있어요.
          </p>
        </>
      ) : (
        <div className="flex h-full flex-col items-center justify-center space-y-4 bg-white text-center">
          <div className="flex justify-center">
            <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M28.5619 63C30.6772 64.8671 33.456 66 36.4993 66C39.5427 66 42.3214 64.8671 44.4368 63M54.4993 24C54.4993 19.2261 52.6029 14.6477 49.2272 11.2721C45.8516 7.89642 41.2732 6 36.4993 6C31.7254 6 27.1471 7.89642 23.7714 11.2721C20.3957 14.6477 18.4993 19.2261 18.4993 24C18.4993 33.2706 16.1607 39.6179 13.5483 43.8162C11.3447 47.3576 10.2429 49.1283 10.2833 49.6223C10.328 50.1692 10.4439 50.3778 10.8847 50.7047C11.2827 51 13.0771 51 16.6659 51H56.3328C59.9216 51 61.7159 51 62.114 50.7047C62.5547 50.3778 62.6706 50.1692 62.7153 49.6223C62.7557 49.1283 61.6539 47.3576 59.4503 43.8162C56.8379 39.6179 54.4993 33.2706 54.4993 24Z"
                stroke="#DBDEE4"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-[1.125rem]/[1.75rem] font-normal text-[#C3C7D0]">받을 알림이 없습니다</p>
        </div>
      )}
    </ul>
  );
};

export default NotificationPage;
NotificationPage.type = "detail";
NotificationPage.title = "알림";
