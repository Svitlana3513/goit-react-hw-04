
import { useState, useEffect } from "react";
import { getImages } from "../../api-images";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";


export default function App() {

  const [searchQuery, setSearchQuery] = useState("");
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [images, setImages] = useState([]);
const [page, setPage] = useState(1);
const [modalIsOpen, setModalIsOpen] = useState(false);
const [selectedImageUrl, setSelectedImageUrl] = useState("");
  
  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }
    async function fetchImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getImages(searchQuery, page);
        setImages((prevState) => [...prevState, ...data]);
      }
      catch (error) {
        setIsError(true);
      }
      finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [page, searchQuery])
  
  const handleSearch = async (topic) => {
    setSearchQuery(topic);
    setPage(1);
    setImages([]);
  }

  const handleMore = async () => {
    setPage(page + 1);
  };

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }
  
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && (<ImageGallery items={images} onClick={openModal} />)}
      {images.length > 0 && !isLoading && (<LoadMoreBtn onClick={handleMore} />)}
      <ImageModal isOpen={modalIsOpen} onClose={closeModal} imageUrl={selectedImageUrl}/>
    </>
  )
}


