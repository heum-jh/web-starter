import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { PopupContext, PopupRenderContext } from "src/components/common/popup-provider";
type usePopupProps = {
  title?: string;
  render: (close: () => void) => React.ReactNode;
};
export const usePopup = ({ title, render }: usePopupProps) => {
  const [visible, setVisible] = useState(false);
  const popup = useContext(PopupContext);
  const setRendered = useContext(PopupRenderContext);

  const handleOpen = useCallback(() => {
    setRendered(render(popup.close));
    setVisible(true);
    popup.open({
      title: title,
      onClose: () => {
        setVisible(false);
      },
    });
  }, [popup, render, setRendered, title]);

  const handleClose = useCallback(() => {
    popup.close();
    setVisible(false);
  }, [popup]);

  useEffect(() => {
    if (visible === true) {
      setRendered(render(popup.close));
    }
    return () => {
      if (visible === true) {
        setRendered(render(popup.close));
      }
    };
  }, [popup.close, render, setRendered, visible]);

  return useMemo(() => ({ open: handleOpen, close: handleClose }), [handleOpen, handleClose]);
};
