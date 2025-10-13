const Home = () => {
  const instruments = [
    {
      name: "Acoustic Guitar",
      description:
        "A classic 6-string wooden guitar perfect for beginners and pros alike.",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20230717/pngtree-lone-acoustic-guitar-in-a-shadowy-studio-3d-rendered-image-image_3898846.jpg",
    },
    {
      name: "Electric Guitar",
      description:
        "High-output electric guitar great for rock, blues, and metal.",
      img: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBndWl0YXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
    },
    {
      name: "Digital Piano",
      description:
        "88-key digital piano with weighted keys and rich sound for realistic play.",
      img: "https://www.yamaha.com/us/pianos/images/portables-main-img-c.jpg",
    },
    {
      name: "Drum Kit",
      description:
        "5-piece drum set with cymbals, perfect for practice or live gigs.",
      img: "https://images.unsplash.com/photo-1543443258-92b04ad5ec6b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJ1bSUyMHNldHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Violin",
      description:
        "4-string classical violin, handcrafted for warm and clear tone.",
      img: "https://images.pexels.com/photos/3120109/pexels-photo-3120109.jpeg?cs=srgb&dl=pexels-fotograf-jylland-1557004-3120109.jpg&fm=jpg",
    },
    {
      name: "Saxophone",
      description: "Eb alto saxophone with smooth key action and bright tone.",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/da/A_Saxophone.jpg",
    },
    {
      name: "Trumpet",
      description:
        "Brass Bb trumpet with case, ideal for jazz and classical music.",
      img: "https://media.istockphoto.com/id/493695358/photo/hands-of-man-playing-the-trumpet.jpg?s=612x612&w=0&k=20&c=_aNa2QrUZ1nxIKijydF2DJg6cnkY9-cN1IQ4CYdx_zc=",
    },
    {
      name: "Ukulele",
      description:
        "Compact 4-string ukulele with a sweet tropical tone, easy to learn.",
      img: "https://ichef.bbci.co.uk/images/ic/640x360/p09h5gp2.jpg",
    },
    {
      name: "Bass Guitar",
      description: "4-string electric bass with solid low-end performance.",
      img: "https://media.istockphoto.com/id/472182841/photo/a-man-playing-a-guitar-in-a-room.jpg?s=612x612&w=0&k=20&c=oRaR2olUVYOVgcOgH-gqdZRs9A5aw14UFR0x199LmCg=",
    },
    {
      name: "DJ Controller",
      description:
        "All-in-one DJ controller for mixing, scratching, and live sets.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pioneer_DDJ-RX_DJ-Controller_%28front%29_with_computer_running_mixing_software_Rekordbox.jpg/1200px-Pioneer_DDJ-RX_DJ-Controller_%28front%29_with_computer_running_mixing_software_Rekordbox.jpg",
    },
  ];
  return (
    <div className="home-container">
      {instruments.map(({ name, description, img }) => {
        return (
          <article key={name} className="instrument-card">
            <h3>{name}</h3>
            <p>{description}</p>
            <img src={img} alt={name} />
          </article>
        );
      })}
    </div>
  );
};

export default Home;
