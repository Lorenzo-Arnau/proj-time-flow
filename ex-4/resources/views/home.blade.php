@extends('layouts.app')

@section('content')
    <div class="bl-container">
        <div class="bl-sidebar">
            <nav>
                <ul>
                    <li><a id="home">Home</a></li>
                    <li><a id="about-me">Chi sono</a></li>
                    <li><a id="likes">Cosa mi piace</a></li>
                    <li><a id="socials">I miei contatti social</a></li>
                    <li><a id="contact-me">Contattami</a></li>
                </ul>
            </nav>
        </div>
        <div class="page-content flex">
            <h1>Benvenuto nel mio portale personale,usa le sezioni nella sidebar per accedere alle diverse parti del sito</h1>
        </div>
        <div class="page-content-about hide">
            <img src="https://www.amica.it/wp-content/uploads/2020/12/brad-pitt.jpg?v=1051999" alt="Brad pitt">
            <div class="title">
                Chi è Lorenzo Arnaù?
            </div>
            <div>
                ...sicuramente non quello nell'immagine!
            </div>
        </div>
        <div class="page-content-likes hide">
            <img src="https://www.ferromagazine.com/wp-content/uploads/2019/12/Triumph-Speed-Twin-750x400.png" alt="Triumph">
            <div class="title">
               Cosa piace a Lorenzo?
            </div>
            <div>
               Motociclette,videogiochi,musica e ovviamente,sviluppo web
            </div>
        </div>
        <div class="page-content-socials hide">
          <div class="title">
            I miei contatti social:
          </div>
          <div>
              <a href="https://github.com/Lorenzo-Arnau">My GitHub</a> /
              <a href="https://www.linkedin.com/in/lorenzo-arna%C3%B9-1839a5160/">My Linkedin</a>
          </div>
        </div>
        <div class="page-content-contacts hide">
            <div class="title">
                Perchè non rimaniamo in contatto? Scrivimi!
            </div>
            <form method="post" action="{{route('messages.store')}}">
                @csrf
                @method('POST')
                <div class="form-group">
                  <label for="exampleFormControlInput1">Nome</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="il tuo nome">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput2">Cognome</label>
                    <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="il tuo cognome">
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput3">Indirizzo Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="name@example.com">
                  </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Scrivi qualcosa!</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message"></textarea>
                </div>
                <button class="sub-button" type="submit">Invia</button>
              </form>
        </div>

    </div>
@endsection
