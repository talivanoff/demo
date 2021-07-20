import styles from './image.module.css';

interface PropsImage {
    src: string;
}

const Image = ({src}: PropsImage) => (
    <img src={src} />
);

export default Image;