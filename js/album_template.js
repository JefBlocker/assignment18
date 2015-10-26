function AlbumTemplate(data) {
  return `
    <li>${data.Artist} released ${data.Album} in ${data.ReleaseYear}.  It reached ${data.UKChartPosition} and was certified ${data.UKCertification}.</li>
  `;
}

export default AlbumTemplate;