import './ImageList.css';
import ImageShow from './ImageShow';

const ImageList = ({ images }) => {
    const renderImages = images.map(image => {
        return <ImageShow key={image.id} image={image} />
    })

  return (
    <div>
      <div className='image-list'>{renderImages}</div>
    </div>
  );
};

export default ImageList;
