import { NextPageWithLayout } from "src/pages/_app";

const NotificationPage: NextPageWithLayout = () => {
  return <h1>NotificationPage</h1>;
};

export default NotificationPage;
NotificationPage.type = "detail";
NotificationPage.title = "알림";
NotificationPage.render = () => {
  return <>📳</>;
};
