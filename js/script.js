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
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
# ****BONUS**
 1. Formattare le date in formato italiano (gg/mm/aaaa)
 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
 */

const post = [
    {
        id: 1,
        name: 'alessandro rossi',
        profilePicture: 'https://picsum.photos/200',
        date: '12/20/2022',
        text: 'lorem ipsum dolor sit amet',
        photo: 'https://picsum.photos/200/300',
        likes: 30
    },
    {
        id: 2,
        name: 'federica russo',
        profilePicture: 'https://picsum.photos/200',
        date: '10/05/2022',
        text: 'Ad ad maiores et sint voluptate recusandae architecto.',
        photo: 'https://picsum.photos/200/300',
        likes: 24
    },
    {
        id: 3,
        name: 'bianca esposito',
        profilePicture: 'https://picsum.photos/200',
        date: '06/28/2022',
        text: 'Distinctio minima iusto.',
        photo: 'https://picsum.photos/200/300',
        likes: 68
    },
    {
        id: 4,
        name: 'marco ferrari',
        profilePicture: 'https://picsum.photos/200',
        date: '05/05/2022',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.',
        photo: 'https://picsum.photos/200/300',
        likes: 79
    }
]