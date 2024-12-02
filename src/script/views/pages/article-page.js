const Article = {
    async render() {
      return `
    <div class="article-main">
      <section class="content">
        <article class="headline">
          <figure class="headline__figure">
            <img src="img/cloud-green.jpg" alt="Awan">
            <figcaption>C23-M4030 2023, 4 Anggota</figcaption>
          </figure>
          <div class="headline__content">
            <h1 class="headline__title">#apaitucuaca : Cuaca Adalah ...</h1>
            <p class="headline__description">Cuaca adalah kondisi atmosfer di suatu tempat dalam jangka waktu pendek, 
            biasanya dalam skala harian atau mingguan. Ini melibatkan variabel seperti suhu udara, kelembaban, tekanan udara, 
            kecepatan dan arah angin, curah hujan, dan kondisi awan. Cuaca terjadi karena interaksi kompleks antara matahari, atmosfer, dan permukaan bumi.</p>
            <a target="_blank" href="https://id.wikipedia.org/wiki/Cuaca">
              <button class="headline__button">Read More</button>
            </a>
          </div>
        </article>
        <div class="latest">
          <h1 class="latest__label">Latest Post</h1>
          <div class="posts">
            <article class="post-item">
              <img class="post-item__thumbnail"
                   src="img/post-1.png"
                   alt="Jawa Tengah, Provinsi Paling Sering Banjir Sepanjang 2022">
              <div class="post-item__content">
                <p class="post-item__date">By <a target="_blank" href="https://databoks.katadata.co.id/" class="post-item__date__author">Databox</a>
                </p>
                <h1 class="post-item__title"><a target="_blank" href="https://databoks.katadata.co.id/datapublish/2023/01/03/jawa-tengah-provinsi-paling-sering-banjir-sepanjang-2022">Jawa Tengah, Provinsi Paling Sering Banjir Sepanjang 2022</a></h1>
                <p class="post-item__description">Menurut Data Informasi Bencana Indonesia (DIBI) ada 582 bencana banjir yang terjadi di seluruh Nusantara sepanjang 2022.
                Jumlah itu menurun 50,71% dibanding tahun 2021 yang mencapai 1.181 kejadian. Pada 2022 bencana banjir paling sering terjadi di Jawa Tengah, 
                yakni 203 kali atau 34,87% dari total peristiwa bencana banjir nasional.</p>
              </div>
            </article>
            
            <article class="post-item">
              <img class="post-item__thumbnail"
                   src="img/post-2.png"
                   alt="BNPB: Banjir Jadi Bencana Paling Banyak Terjadi di Indonesia Sepanjang 2022">
              <div class="post-item__content">
                <p class="post-item__date">By <a target="_blank" href="https://goodstats.id/" class="post-item__date__author">GoodStat</a>
                </p>
                <h1 class="post-item__title"><a target="_blank" href="https://goodstats.id/article/bnpb-banjir-jadi-bencana-paling-banyak-terjadi-di-indonesia-sepanjang-2022-o7h9b">BNPB: Banjir Jadi Bencana Paling Banyak Terjadi di Indonesia Sepanjang 2022</a></h1>
                <p class="post-item__description">Badan Nasional Penanggulangan Bencana (BNPB) dalam laman resminya mencatat,
                kejadian bencana di Indonesia didominasi oleh bencana hidrometeorologi, seperti banjir, cuaca ekstrem, serta longsor.
                Berdasarkan akumulasi, banjir merupakan bencana yang paling sering terjadi dengan total rumah terendam mencapai 981.755 bangunan.</p>
              </div>
            </article>

            <article class="post-item">
              <img class="post-item__thumbnail"
                   src="img/post-3.png"
                   alt="BNPB: Indonesia Alami 3.522 Bencana Alam pada 2022">
              <div class="post-item__content">
                <p class="post-item__date">By <a target="_blank" href="https://dataindonesia.id/" class="post-item__date__author">DataIndonesia</a>
                </p>
                <h1 class="post-item__title"><a target="_blank" href="https://dataindonesia.id/varia/detail/bnpb-indonesia-alami-3522-bencana-alam-pada-2022">BNPB: Indonesia Alami 3.522 Bencana Alam pada 2022</a>
                </h1>
                <p class="post-item__description">Badan Nasional Penanggulangan Bencana (BNPB) melaporkan, terdapat 3.522 bencana alam di Indonesia yang terjadi sepanjang 2022. 
                Banjir menjadi bencana alam yang paling sering melanda sepanjang tahun lalu, yakni 1.520 peristiwa.</p>
              </div>
            </article>
            
            <article class="post-item">
              <img class="post-item__thumbnail"
                   src="img/post-4.jpg"
                   alt="Anomali Cuaca akibat Awan Kumulonimbus Berpotensi Bahaya, BMKG Nunukan Ingatkan Masyarakat Waspada">
              <div class="post-item__content">
                <p class="post-item__date">By <a target="_blank" href="https://www.kompas.com/" class="post-item__date__author">Kompas.com</a>
                </p>
                <h1 class="post-item__title"><a target="_blank" href="https://regional.kompas.com/read/2023/06/06/072844678/anomali-cuaca-akibat-awan-kumulonimbus-berpotensi-bahaya-bmkg-nunukan">Anomali Cuaca akibat Awan Kumulonimbus Berpotensi Bahaya, BMKG Nunukan Ingatkan Masyarakat Waspada</a>
                </h1>
                <p class="post-item__description">Perubahan cuaca yang seringkali terjadi mendadak di Kabupaten Nunukan, Kalimantan Utara, membuat Badan Meteorologi Klimatologi Geofisika (BMKG) Nunukan, mengeluarkan imbauan agar masyarakat tetap selamat dan waspada. 
                Kepala Kantor BMKG Nunukan, William mengatakan, beberapa hari terakhir, cuaca di Nunukan cepat berubah. Panas terik terjadi di siang hari, namun malam harinya, muncul angin kencang, lalu turun hujan lebat yang disertai kilat dan petir.</p>
              </div>
            </article>
            
            <article class="post-item">
              <img class="post-item__thumbnail"
                   src="img/post-5.jpg"
                   alt="Kota Malang Hujan Es, BPBD: Karena Anomali Cuaca">
              <div class="post-item__content">
                <p class="post-item__date">By <a target="_blank" href="https://www.kompas.com/" class="post-item__date__author">Kompas.com</a>
                </p>
                <h1 class="post-item__title"><a target="_blank" href="https://surabaya.kompas.com/read/2021/12/23/163134078/kota-malang-hujan-es-bpbd-karena-anomali-cuaca">Kota Malang Hujan Es, BPBD: Karena Anomali Cuaca</a></h1>
                <p class="post-item__description">Hujan es disertai angin kencang terjadi di Kota Malang, Kamis (23/12/2021) sekitar pukul 13.00 WIB. Belum ada laporan korban jiwa akibat kejadian itu. Dilansir dari SURYA.co.id, hujan es itu melanda sebagian wilayah Sawojajar dan Madyopuro, Kecamatan Kedungkandang sekitar 10 menit. 
                Hujan es tersebut membuat pengendara banyak yang menepi. "Madyopuro hujan es. Ini banyak orang-orang menepi," kata Yoga seperti dikutip dari SURYA.co.id. 
                Kepala Badan Penanggulangan Bencana Daerah (BPBD) Kota Malang, Ali Mulyanto mengatakan, hujan es itu disebabkan oleh anomali cuaca. "Karena anomali cuaca," katanya.</p>
              </div>
            </article>
            
            <article class="post-item">
              <img class="post-item__thumbnail"
                   src="img/post-6.jpg"
                   alt="Anomali Cuaca, Musim Kemarau tapi Hujan Setiap Hari di Jatim, Ini Penjelasan BMKG">
              <div class="post-item__content">
                <p class="post-item__date">By <a target="_blank" href="https://www.kompas.com/" class="post-item__date__author">Kompas.com</a>
                </p>
                <h1 class="post-item__title"><a target="_blank" href="https://regional.kompas.com/read/2021/06/28/120812778/anomali-cuaca-musim-kemarau-tapi-hujan-setiap-hari-di-jatim-ini-penjelasan">Anomali Cuaca, Musim Kemarau tapi Hujan Setiap Hari di Jatim, Ini Penjelasan BMKG</a></h1>
                <p class="post-item__description">Anomali cuaca terjadi di beberapa provinsi di Jawa Timur. Meski telah memasuki musim kemarau, beberapa daerah tersebut justru nyaris diguyur hujan setiap hari. Lantas apa penyebabnya? 
                Teguh Tri Susanto selaku Kasi Data dan Informasi BMKG Klas I Juanda Surabaya menjelaskan, ada sejumlah hal yang menyebabkan turunnya hujan di musim kemarau. 
                Dari pemantauan yang dilakukan oleh BMKG, sebagian wilayah Jatim sudah masuk kemarau sejak 3 April 2021. 
                "Adanya peningkatan curah hujan di pekan ini dipicu oleh berasosiasinya beberapa fenomena dinamika atmosfer-laut yang cukup signifikan, memicu peningkatan curah hujan di wilayah Jawa Timur," ucap Teguh saat dikonfirmasi via pesan WhatsApp, Senin (28/6/2021).</p>
              </div>
            </article>
          
          </div>
        </div>
      </section>
    </div>

      </div>
        `;
    },
  
    async afterRender() {
      
    },
  };
  
  export default Article;