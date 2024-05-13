function main() {
    const baseUrl = 'https://notes-api.dicoding.dev/v2';
    const loadingIndicator = document.querySelector('loading-indicator');

    const getNotes = async () => {
      
      try {
        const response = await fetch(`${baseUrl}/notes`);
        const responseJson = await response.json();
        if(responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderAllNotes(responseJson.data);
          loadingIndicator.show();
        }
      } catch (error) {
        showResponseMessage(error);
      } finally {
        loadingIndicator.hide();
      }
    };

    const getNotesArchived = async () => {
      
      try {
        const response = await fetch(`${baseUrl}/notes/archived`);
        const responseJson = await response.json();
        if(responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderAllNotesArchived(responseJson.data);
        }
      } catch (error) {
        showResponseMessage(error);
      }
    };


    const insertNote = async (note) => {
      console.log(note);
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(note)
        };
        const response = await fetch(`${baseUrl}/notes`, options);
        const responseJson = await response.json();
        showResponseMessage(responseJson.message);
        getNotes();
      } catch (error) {
        showResponseMessage(error);
      }
    };
  
    const removeNote = async (noteId) => {
      try {
        const response = await fetch(`${baseUrl}/notes/${noteId}`, {method: 'DELETE'});
        const responseJson = await response.json();
        showResponseMessage(responseJson.message);
        getNotes();
      } catch (error) {
        showResponseMessage(error);
      }
    };

    function formatDate(dateString) {
        const months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];
    
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
    
        const monthName = months[monthIndex];
        const formattedDate = `${day} ${monthName} ${year}`;
    
        return formattedDate;
    }
  
    const renderAllNotes = (notes) => {
      const listNoteElement = document.querySelector('.char-list');
      listNoteElement.innerHTML = '';
      
      notes.forEach(note => {
        const formattedDate = formatDate(note.createdAt);
        listNoteElement.innerHTML += `
          <div>
            <article tabindex="0" class="char-item">
                <h3 class="char">${note.title}</h3>
                <div class="char__description">
                    <div class="char__name">${note.body}</div>
                    <div class="char__pronounce">${formattedDate}</div>
                    <p id="archivedStatus">#Data non Archived</p>
                    <button type="button" class="btn btn-danger button-delete" id="${note.id}">Hapus</button>
                </div>
            </article>
          </div>
        `;
      });
  
        const buttons = document.querySelectorAll('.button-delete');
            buttons.forEach(button => {
                button.addEventListener('click', (event) => {
                const noteId = event.target.id;
                
                removeNote(noteId);
            });
        });
    };

    const renderAllNotesArchived = (notes) => {
      const listNoteElement = document.querySelector('.char-list');
      listNoteElement.innerHTML = '';
      
      notes.forEach(note => {
        const formattedDate = formatDate(note.createdAt);
        listNoteElement.innerHTML += `
          <div>
            <article tabindex="0" class="char-item">
                <h3 class="char">${note.title}</h3>
                <div class="char__description">
                    <div class="char__name">${note.body}</div>
                    <div class="char__pronounce">${formattedDate}</div>
                    <p id="archivedStatus">#Data non Archived</p>
                    <button type="button" class="btn btn-danger button-delete" id="${note.id}">Hapus</button>
                </div>
            </article>
          </div>
        `;
      });
  
        const buttons = document.querySelectorAll('.button-delete');
            buttons.forEach(button => {
                button.addEventListener('click', (event) => {
                const noteId = event.target.id;
                
                removeNote(noteId);
            });
        });
    };
  
    const showResponseMessage = (message = 'Check your internet connection') => {
      alert(message);
    };

    
    document.addEventListener('DOMContentLoaded', () => {
      
      const noteTitle = document.querySelector('#noteTitle');
      const noteBody = document.querySelector('#noteBody');
      const buttonSave = document.querySelector('#buttonSave');
      const loadingIndicator = document.querySelector('loading-indicator');
  
      buttonSave.addEventListener('click', async () => {
        const note = {
          title: noteTitle.value,
          body: noteBody.value
        };

        loadingIndicator.show();
        try {
          // Lakukan request HTTP di sini (contoh menggunakan fetch API)
          const response = await fetch(`${baseUrl}`);
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        } finally {
          // Sembunyikan indikator loading setelah request selesai
          loadingIndicator.hide();
        }
        insertNote(note);
      });
      getNotes();
      getNotesArchived(); 
    });
  }
  
  export default main;