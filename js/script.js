/*
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
# Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
# ****BONUS**
 1. Formattare le date in formato italiano (gg/mm/aaaa)
 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
 */
// ***********FUNZIONI************************
const newPost = (userElement) => {
    const post = 
    `<div class="post">
         <div class="post__header">
              <div class="post-meta">
                 <div class="post-meta__icon">
                      <img class="profile-pic" src="${userElement.profilePicture}" alt="${userElement.name}" />
                  </div>
                  <div class="post-meta__data">
                       <div class="post-meta__author">${userElement.name}</div>
                       <div class="post-meta__time">${userElement.date}</div>
                  </div>
               </div>
           </div>
           <div class="post__text">${userElement.text}</div>
           <div class="post__image">
               <img src="${userElement.photo}" alt="${userElement.photo}" />
           </div>
           <div class="post__footer">
               <div class="likes js-likes">
                   <div class="likes__cta">
                      <button class="like-button js-like-button" href="#" data-postid="${userElement.id}">
                          <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                          <span class="like-button__label">Mi Piace</span>
                       </button>
                  </div>
                  <div class="likes__counter">Piace a <b id="like-counter-${userElement.id}" class="js-likes-counter">${userElement.likes}</b> persone</div>
              </div>
          </div>
      </div>
    `;
    return post;
}; 

// prendo elementi dal dom
const postsList = document.querySelector('.posts-list');


// creo array degli oggetti di ciascun post 
const listPost = [
    {
        id: 1,
        name: 'Alessandro Rossi',
        profilePicture: 'https://picsum.photos/200',
        date: '12/20/2022',
        text: 'Lorem ipsum dolor sit amet',
        photo: 'https://unsplash.it/600/300?image=176',
        likes: 30
    },
    {
        id: 2,
        name: 'Federica Russo',
        profilePicture: 'https://picsum.photos/200',
        date: '10/05/2022',
        text: 'Ad ad maiores et sint voluptate recusandae architecto.',
        photo: 'https://unsplash.it/600/300?image=174',
        likes: 24
    },
    {
        id: 3,
        name: 'Bianca Esposito',
        profilePicture: 'https://picsum.photos/200',
        date: '06/28/2022',
        text: 'Distinctio minima iusto.',
        photo: 'https://unsplash.it/600/300?image=179',
        likes: 68
    },
    {
        id: 4,
        name: 'Marco Ferrari',
        profilePicture: 'https://picsum.photos/200',
        date: '05/05/2022',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.',
        photo: 'https://unsplash.it/600/300?image=171',
        likes: 79
    }
]
// creo variabile d'appoggio
let post = '';

//genero post nel feed
listPost.forEach( (element,i) => {
    post += newPost(element);
}); 
// stampo in pagina
postsList.innerHTML = post;

// prendo btn
const btn = document.querySelector('.like-button');
// prendo like
const likesCounter = document.querySelector('js-likes-counter');
let like = 0;
// *****EVENTI DINAMICI ***********************************
btn.addEventListener('click', ()=>{
    btn.classList.toggle('like-button--liked');
    listPost.forEach((element,i)=> {
       like += element[i].likes;
    });

    const currentLike = like + 1;

    console.log(currentLike);
});
