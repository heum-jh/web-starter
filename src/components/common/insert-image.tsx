import { useRef, useState } from "react";
import Option from "src/core/function/option";
import Image from "next/image";
import Alert from "src/core/function/alert";

export interface ImageProps {
  name: string;
  url: string;
}
type InsertImageProps = {
  imageUrl?: ImageProps[];
};
const InsertImage = ({ imageUrl }: InsertImageProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageProps[]>(imageUrl && imageUrl.length > 0 ? imageUrl : []);
  const cameraRef = useRef<HTMLInputElement>(null);
  const handleOpenAlbum = () => {
    try {
      const inputElement = document.createElement("input");
      inputElement.type = "file";
      inputElement.accept = "image/*";

      inputElement.addEventListener("change", event => {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];
        const selectImageName = selectedImage.map(item => item.name);
        if (file) {
          const imageURL = URL.createObjectURL(file);

          if (selectImageName.indexOf(file.name) !== -1) {
            Alert.alert("이미 추가한 파일입니다.");
            return;
          } else {
            setSelectedImage([...selectedImage, { name: file.name, url: imageURL }]);
          }
        }
      });

      inputElement.click();
    } catch (error) {
      console.error("앨범 열기 오류:", error);
    }
  };
  const handleRemove = (name: string) => {
    setSelectedImage(prev => {
      return prev.filter(items => items.name !== name);
    });
  };

  return (
    <>
      {selectedImage.length === 10 ? (
        <></>
      ) : (
        <div
          className="pounded-[0.25rem] flex h-[3.5rem] w-[3.5rem] flex-col items-center justify-center rounded border border-[#A2A9B5]"
          onClick={async () => {
            await Option.lists([
              {
                label: "촬영하기",
                onClick: () => cameraRef.current?.click(),
              },
              {
                label: "앨범에서 선택하기",
                onClick: () => {
                  if (selectedImage.length > 9) {
                    Alert.alert("이미지는 최대 10개까지 가능 합니다.");
                    return;
                  } else {
                    handleOpenAlbum();
                  }
                },
              },
            ]);
          }}
        >
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.23808 18.1369L10.0101 12.3649C10.3566 12.0184 10.5298 11.8452 10.7296 11.7803C10.9053 11.7232 11.0947 11.7232 11.2704 11.7803C11.4702 11.8452 11.6434 12.0184 11.9899 12.3649L17.7234 18.0984M12.75 13.125L15.2601 10.6149C15.6066 10.2684 15.7798 10.0952 15.9796 10.0303C16.1553 9.97316 16.3447 9.97316 16.5204 10.0303C16.7202 10.0952 16.8934 10.2684 17.2399 10.6149L19.75 13.125M9.25 7.875C9.25 8.8415 8.4665 9.625 7.5 9.625C6.5335 9.625 5.75 8.8415 5.75 7.875C5.75 6.9085 6.5335 6.125 7.5 6.125C8.4665 6.125 9.25 6.9085 9.25 7.875ZM6.45 18.375H15.55C17.0201 18.375 17.7552 18.375 18.3167 18.0889C18.8106 17.8372 19.2122 17.4356 19.4639 16.9417C19.75 16.3802 19.75 15.6451 19.75 14.175V6.825C19.75 5.35486 19.75 4.61979 19.4639 4.05827C19.2122 3.56435 18.8106 3.16278 18.3167 2.91111C17.7552 2.625 17.0201 2.625 15.55 2.625H6.45C4.97986 2.625 4.24479 2.625 3.68327 2.91111C3.18935 3.16278 2.78778 3.56435 2.53611 4.05827C2.25 4.61979 2.25 5.35486 2.25 6.825V14.175C2.25 15.6451 2.25 16.3802 2.53611 16.9417C2.78778 17.4356 3.18935 17.8372 3.68327 18.0889C4.24479 18.375 4.97986 18.375 6.45 18.375Z"
              stroke="#A2A9B5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-sm font-normal text-[#A2A9B5]">
            <span>{selectedImage.length}</span>/10
          </div>
        </div>
      )}
      {selectedImage.length > 0 &&
        selectedImage.map(item => {
          return (
            <div key={item.name} className="relative h-[3.5rem] w-[3.5rem] rounded-[0.25rem] border border-[#F0F1F2]">
              <div
                className="absolute right-[-0.375rem] top-[-0.375rem] z-1 flex h-[1rem] w-[1rem] items-center justify-center rounded-[50%] bg-[#1E1E1E] "
                onClick={() => handleRemove(item.name)}
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.759498 7.24246C0.637459 7.12042 0.637459 6.92255 0.759498 6.80051L3.55845 4.00153L0.759511 1.20254C0.637472 1.0805 0.637472 0.882637 0.759511 0.760598C0.881549 0.638559 1.07941 0.638559 1.20145 0.760598L4.00039 3.55959L6.79934 0.760633C6.92138 0.638594 7.11924 0.638594 7.24128 0.760633C7.36332 0.882672 7.36332 1.08054 7.24128 1.20257L4.44233 4.00153L7.24131 6.80047C7.36335 6.92251 7.36335 7.12037 7.24131 7.24241C7.11927 7.36445 6.92141 7.36445 6.79937 7.24241L4.00039 4.44348L1.20144 7.24246C1.0794 7.36449 0.881536 7.36449 0.759498 7.24246Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image alt="" src={item.url} fill className="z-0 object-cover" />
            </div>
          );
        })}
    </>
  );
};
export default InsertImage;
