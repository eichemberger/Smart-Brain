import './face-recognition.styles.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2 '>
        <img
          id='inputimage'
          src={imageUrl}
          alt='img'
          width='500px'
          height='auto'
        />
        <div
          className='bounding-box'
          style={{
            left: box.leftCol,
            right: box.rightCol,
            top: box.topRow,
            bottom: box.bottomRow,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
