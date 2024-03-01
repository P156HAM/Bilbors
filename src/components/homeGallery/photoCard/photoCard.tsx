import { Photo } from "../../../constants/types";
import "./photoCard.css";

interface PhotoCardProps {
  photo: Photo;
}

function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <div className="bg-primary2 h-full p-4 ">
      <div
        className=" w-full h-full object-cover bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${photo.imageUrl})` }}
      >
        <h3 className="text-center text-secondary4 font-headline text-2xl my-2 ">
          {photo.title}
        </h3>
        <p className="text-secondary4 mb-4">{photo.callToAction}</p>
        <span>
          <button className="bg-primary2 hover:bg-brand-identity-dark text-secondary4 font-headline font-bold py-2 px-4 rounded">
            {photo.ctaButtonText}
          </button>
        </span>
      </div>
    </div>
  );
}

export default PhotoCard;
