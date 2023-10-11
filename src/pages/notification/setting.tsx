import { useCallback, useState } from "react";
import { NextPageWithLayout } from "../_app";
import ToggleSwitch from "src/components/common/toggle-switch";

const NotificationSettingPage: NextPageWithLayout = () => {
  const [chattingToggle, setChattingToggle] = useState<boolean>(false);
  const [meetingToggle, setMeetingToggle] = useState<boolean>(false);
  const handleToggleClass = useCallback((checked: boolean) => {
    setMeetingToggle(checked);
  }, []);
  const handleToggleChatting = useCallback((checked: boolean) => {
    setChattingToggle(checked);
  }, []);
  return (
    <ul className="flex h-full flex-col bg-white ">
      <>
        <li className="flex h-[4.75rem]  flex-row items-center justify-between pl-[1.25rem]">
          <div className="flex flex-col ">
            <div className=" text-base  font-medium text-[#1E1E1E]">{"채팅 알림"}</div>
            <div className="text-sm font-normal text-[#707888]">{"채팅에 활동이 있을 경우 알림"}</div>
          </div>
          <div className="pr-[1.25rem]">
            <ToggleSwitch checked={chattingToggle} onToggle={handleToggleChatting}></ToggleSwitch>
          </div>
        </li>
        <li className="flex h-[4.75rem]  flex-row items-center justify-between  pl-[1.25rem]">
          <div className="flex flex-col ">
            <div className="text-base  font-medium text-[#1E1E1E]">{"모임 알림"}</div>
            <div className="text-sm font-normal text-[#707888]">{"참여한 모임에 활동이 있을 경우 알림"}</div>
          </div>
          <div className=" pr-[1.25rem]">
            <ToggleSwitch checked={meetingToggle} onToggle={handleToggleClass}></ToggleSwitch>
          </div>
        </li>
      </>
    </ul>
  );
};

export default NotificationSettingPage;
NotificationSettingPage.type = "detail";
NotificationSettingPage.title = "알림 설정";
