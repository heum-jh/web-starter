export type OptionProps = {
  label: string;
  onClick: () => void;
};

const Option = {
  async lists(props: OptionProps[]) {
    return new Promise<void>(resolve =>
      window.dispatchEvent(
        new CustomEvent("option", {
          detail: {
            buttons: props,
            onClose: resolve,
          },
        }),
      ),
    );
  },
};

export default Option;
