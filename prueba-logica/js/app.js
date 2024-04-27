let artists = [];

const $artistsList = document.querySelector("#artists-list");
const $noArtists = document.querySelector("#no-artists");
const $form = document.querySelector("#form");
const $bestSellingAlbums = document.querySelector("#bestSellingAlbums");
const $totalAlbumSales = document.querySelector("#totalAlbumSales");
const $longNames = document.querySelector("#longNames");
const $search = document.querySelector("#search");
const $deleteArtists = document.querySelector("#delete-artists");
const $addArtist = document.querySelector("#add-artist");

window.onload = async () => {
  artists = await getArtists();

  const bestSellingAlbums = artists.filter((music) => music.sales > 1000000);

  bestSellingAlbums.forEach((music) => {
    $bestSellingAlbums.innerHTML += `<p>“${music.artist} es un gran artista”</p>`;
  });

  const totalAlbumSales = artists.reduce(
    (accumulator, current) => accumulator + current.sales,
    0
  );
  $totalAlbumSales.innerHTML = `<p>${totalAlbumSales}</p>`;

  const longNames = artists.filter((music) => music.artist.length > 8);
  longNames.forEach((music) => {
    $longNames.innerHTML += `
        <p>
        “${music.artist} tiene un nombre muy grande”
        </p>
    `;
  });

  $addArtist.addEventListener("click", addArtist);
  $deleteArtists.addEventListener("click", deleteArtists);
  $form.addEventListener("submit", validForm);
  $search.addEventListener("keyup", (e) => {
    if (e.target.value === "") {
      if ($noArtists.firstChild) {
        $noArtists.removeChild($noArtists.firstChild);
      }
      showArtists(artists, 'search');
    }
  });
  showArtists(artists);
};

const addArtist = async () => {
  const artist = { artist: "Radiohead", name: "Ok Computer", sales: 5000000 };

  artists.push(artist);

  showArtists(artists);
};

const deleteArtists = async () => {
  const artistsToDelete = ["Adele", "Prince", "Justin Bieber"];

  artistsToDelete.forEach((artist) => {
    const index = artists.findIndex(
      (m) => m.artist.toLowerCase() === artist.toLowerCase()
    );
    artists.splice(index, 1);
  });

  showArtists(artists);
};

const getArtists = async () => {
  const res = await fetch("data.json");
  return await res.json();
};

const searchArtists = async (search) => {
  const artists = await getArtists();
  const results = artists.filter((music) =>
    music.artist.toLowerCase().includes(search)
  );

  if (results.length === 0) {
    $noArtists.innerHTML = `<p>No hay artistas con ${search}</p>`;
    showArtists([], 'search');
  } else {
    if ($noArtists.firstChild) {
      $noArtists.removeChild($noArtists.firstChild);
    }

    showArtists(results, 'search');
  }
};

const renderArtistItem = (artist) => {
  return `
    <h3 class="font-medium">${artist.artist}</h3>
    <p>Album: ${artist.name}</p>
    <p>Sales: ${artist.sales}</p>
  `;
};

const renderSearchArtistItem = (artist) => {
  return `
  “El álbum ${artist.name} del artista ${artist.artist} vendió aproximadamente ${artist.sales} copias.”
  `;
};

const showAlert = (message) => {
  const existAlert = document.querySelector(".bg-red-100");

  if (!existAlert) {
    const alert = document.createElement("p");
    alert.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "p-3",
      "rounded",
      "mx-auto",
      "text-center"
    );
    alert.innerHTML = `
              <strong class="font-bold">Error: </strong>
              <span class>${message}</span>
          `;

    $form.insertBefore(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
};

const showArtists = (artists, type = "artists") => {
  while ($artistsList.firstChild) {
    $artistsList.removeChild($artistsList.firstChild);
  }

  artists.forEach((artist) => {
    const item = document.createElement("li");
    item.innerHTML +=
      type === "artists"
        ? renderArtistItem(artist)
        : renderSearchArtistItem(artist);
    $artistsList.appendChild(item);
  });
};

const validForm = (e) => {
  e.preventDefault();

  const search = document.querySelector("#search").value;
  const searchOptimized = search.toLowerCase().trim();

  if (searchOptimized === "") {
    showAlert("Escribe un artista");
    return;
  }

  searchArtists(searchOptimized);
};
