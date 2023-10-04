import { AlertOptions } from "src/components/common/alert-provider";

export interface AlertAlertOptions {
  confirmText?: string;
}

export interface AlertConfirmOptions {
  confirmText?: string;
  cancelText?: string;
}

const Alert = {
  custom(options: AlertOptions) {
    window.dispatchEvent(
      new CustomEvent("alert", {
        detail: options,
      }),
    );
  },
  async alert(message: string, title?: string, { confirmText = "확인" }: AlertAlertOptions = {}) {
    return new Promise(resolve =>
      window.dispatchEvent(
        new CustomEvent("alert", {
          detail: {
            title: title,
            message: message,
            buttons: [{ text: confirmText, type: "confirm", onPress: resolve }],
            onClose: resolve,
          },
        }),
      ),
    );
  },
  async confirm(
    message: string,
    title?: string,
    { confirmText = "예", cancelText = "아니오" }: AlertConfirmOptions = {},
  ) {
    return new Promise<boolean>(resolve =>
      window.dispatchEvent(
        new CustomEvent("alert", {
          detail: {
            title: title,
            message: message,
            buttons: [
              {
                text: cancelText,
                type: "cancel",
                onPress: () => resolve(false),
              },
              {
                text: confirmText,
                type: "confirm",
                onPress: () => resolve(true),
              },
            ],
            onClose: (result: boolean) => resolve(result),
          },
        }),
      ),
    );
  },
};

export default Alert;
