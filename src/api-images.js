import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async (topic, currentPage) => {
    const response = await axios.get("/search/photos", {
        params: {
            query: topic,
            page: currentPage,
            per_page: 16,
            client_id: 'lt64ARMbz2bcDSoPLXh2_w0CMT5CGRXpDBDlF9XhWW0',
            orientation: 'landscape',
        }
    })
    return response.data.hits;
    }