export const getPhotoFromNasa = async() => {
  try {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=0pQw7CoiDfLSEI2banV4VVPCbmVYxfcbCfXeRTj3')
    return await response.json()
  } catch (error) {
    
  }
}

