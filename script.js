// let f= document.querySelector('form');
// f.addEventListener('submit', async (e)=>{
//     e.preventDefault();
//     let input = document.querySelector('input');
//     const key= 'xPLxRjcnyE66qSj3pGmdhBDmYI76e3S3MnHiINm_5PQ'
//     let resp= await fetch(`https://api.unsplash.com/search/photos?query=${input.value}&client_id=${key}`);
//     let result = await resp.json()
//     prod= '';
//     console.log(result);
//     result.results.forEach(item => {
//         prod+= `<img src=${item.urls.thumb}>`
//     });
//     document.querySelector('.image_box').innerHTML =prod
//     console.log(result);
// })

function show() {
    const image_key= 'Dc-05zPgtvt5hUgpZy9TA0HboGOaYLZGuFDIabYxXwU';
    const image_url= `https://api.unsplash.com/photos/random?client_id=${image_key}&count=${10}`;
    fetch(image_url)
    .then(response => response.json())
    .then(data => {
        const images_box = document.querySelector('.image-box');
        images_box.innerHTML = '';
        data.forEach(photo => {
          const img= document.createElement('img');
          img.src = photo.urls.small;
          img.alt = photo.alt_description;
          images_box.appendChild(img);
        });
    })
}

