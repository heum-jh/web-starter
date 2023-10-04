import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { PopupContext, PopupRenderContext } from "src/components/common/popup-provider";

export const usePopup = (render: (close: () => void) => React.ReactNode) => {
  const [visible, setVisible] = useState(false);
  const popup = useContext(PopupContext);
  const setRendered = useContext(PopupRenderContext);

  const handleOpen = useCallback(() => {
    setRendered(render(popup.close));
    setVisible(true);
    popup.open({
      onClose: () => {
        setVisible(false);
      },
    });
  }, [popup, render, setRendered]);

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
