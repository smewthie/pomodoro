var images = [
    'https://i.bandori.party/u/c/transparent/501Kasumi-Toyama-Pure-Go-Ahead-8t70PA.png',
    'https://i.bandori.party/u/c/transparent/502Kasumi-Toyama-Power-Stage-MBhQvC.png',
    'https://i.bandori.party/u/c/art/a/503Kasumi-Toyama-Happy-Promised-Candy-0Q5rdZ.png',
    'https://i.bandori.party/u/c/art/a/504Kasumi-Toyama-Power-Everyone-s-at-the-Amusement-Park-EvTPJB.png',
    'https://i.bandori.party/u/c/transparent/505Tae-Hanazono-Cool-Natural-Beauty-lzMwJN.png',
    'https://i.bandori.party/u/c/transparent/506Tae-Hanazono-Happy-Stage-Gh7xaX.png',
    'https://i.bandori.party/u/c/art/a/507Tae-Hanazono-Pure-Everyone-s-Song-9r6MoU.png',
    'https://i.bandori.party/u/c/art/a/508Tae-Hanazono-Happy-Sharing-Happiness-RYeDQP.png',
    'https://i.bandori.party/u/c/transparent/509Rimi-Ushigome-Power-I-Love-Chocolate-BFik6L.png',
    'https://i.bandori.party/u/c/transparent/510Rimi-Ushigome-Pure-Stage-7hrmiS.png',
    'https://i.bandori.party/u/c/art/a/511Rimi-Ushigome-Cool-Mustering-Courage-4e2M0P.png',
    'https://i.bandori.party/u/c/art/a/512Rimi-Ushigome-Power-Choco-Cornet-Time-TBbKgH.png',
    'https://i.bandori.party/u/c/transparent/513Saaya-Yamabuki-Power-Everyone-s-Big-Sister-4aOrzQ.png',
    'https://i.bandori.party/u/c/transparent/514Saaya-Yamabuki-Happy-Stage-GRc99W.png',
    'https://i.bandori.party/u/c/art/a/515Saaya-Yamabuki-Power-Precious-Time-Ayu2FN.png',
    'https://i.bandori.party/u/c/art/a/516Saaya-Yamabuki-Pure-Matching-Scrunchies-z6MQOe.png',
    'https://i.bandori.party/u/c/transparent/517Arisa-Ichigaya-Happy-Honor-Student-at-Feigning-Innocence-jxVxmG.png',
    'https://i.bandori.party/u/c/transparent/518Arisa-Ichigaya-Cool-Stage-Ex5OQ0.png',
    'https://i.bandori.party/u/c/art/a/519Arisa-Ichigaya-Happy-Working-Together-2U3SX5.png',
    'https://i.bandori.party/u/c/art/a/520Arisa-Ichigaya-Cool-Cute-Friends-4YBp6X.png',
    'https://i.bandori.party/u/c/transparent/521Ran-Mitake-Pure-Thinking-of-Cool-Friends-RGR4cd.png',
    'https://i.bandori.party/u/c/transparent/522Ran-Mitake-Power-Stage-Yx2kmY.png',
    'https://i.bandori.party/u/c/art/a/523Ran-Mitake-Power-No-More-Hesitating-6lrPzN.png',
    'https://i.bandori.party/u/c/transparent/525Moca-Aoba-Cool-My-Pace-8bfb4K.png',
    'https://i.bandori.party/u/c/transparent/526Moca-Aoba-Pure-Stage-h0o4wK.png',
    'https://i.bandori.party/u/c/art/a/527Moca-Aoba-Happy-Significance-of-Childhood-Friend-S5chU8.png',
    'https://i.bandori.party/u/c/transparent/529Himari-Uehara-Happy-Everyone-s-Leader-YQWBuJ.png',
    'https://i.bandori.party/u/c/transparent/530Himari-Uehara-Happy-Stage-fWmrVY.png',
    'https://i.bandori.party/u/c/art/a/531Himari-Uehara-Pure-Mysterious-Charm-HdOEYa.png',
    'https://i.bandori.party/u/c/transparent/533Tomoe-Udagawa-Power-Reliable-Elder-Sister-El7lWo.png',
    'https://i.bandori.party/u/c/transparent/534Tomoe-Udagawa-Cool-Stage-Fe9duU.png',
    'https://i.bandori.party/u/c/art/a/535Tomoe-Udagawa-Cool-You-re-Not-Being-Honest-RGnfzS.png',
    'https://i.bandori.party/u/c/transparent/537Tsugumi-Hazawa-Pure-Everyone-s-Support-N9nkEN.png',
    'https://i.bandori.party/u/c/transparent/538Tsugumi-Hazawa-Power-Stage-2RvojX.png',
    'https://i.bandori.party/u/c/art/a/539Tsugumi-Hazawa-Power-The-Beginning-wWDits.png',
    'https://i.bandori.party/u/c/transparent/541Kokoro-Tsurumaki-Happy-Abnormality-of-Hanasakigawa-8R0ODp.png',
    'https://i.bandori.party/u/c/transparent/542Kokoro-Tsurumaki-Pure-Stage-mkeOyZ.png',
    'https://i.bandori.party/u/c/art/a/543Kokoro-Tsurumaki-Power-Invincible-Hero-eFF6lI.png',
    'https://i.bandori.party/u/c/transparent/545Kaoru-Seta-Happy-Prince-of-Rumours-rfOmJW.png',
    'https://i.bandori.party/u/c/transparent/546Kaoru-Seta-Cool-Stage-WLB0uC.png',
    'https://i.bandori.party/u/c/art/a/547Kaoru-Seta-Cool-The-Actress-Who-Paints-the-World-Po0PK6.png',
    'https://i.bandori.party/u/c/transparent/549Hagumi-Kitazawa-Power-Smile-Captain-SbEzi6.png',
    'https://i.bandori.party/u/c/transparent/550Hagumi-Kitazawa-Happy-Stage-7N7rcy.png',
    'https://i.bandori.party/u/c/art/a/551Hagumi-Kitazawa-Happy-Everyone-ready-lets-go-sYDaGC.png',
    'https://i.bandori.party/u/c/transparent/553Kanon-Matsubara-Pure-Quiet-Girl-IWPyeO.png',
    'https://i.bandori.party/u/c/transparent/554Kanon-Matsubara-Power-Stage-vN795j.png',
    'https://i.bandori.party/u/c/art/a/555Kanon-Matsubara-Pure-One-Step-Forward-OziWTP.png',
    'https://i.bandori.party/u/c/transparent/557Misaki-Okusawa-Cool-Everything-in-Moderation-eXp9Pn.png',
    'https://i.bandori.party/u/c/transparent/558Misaki-Okusawa-Happy-Stage-iQwjSr.png',
    'https://i.bandori.party/u/c/art/a/559Misaki-Okusawa-Happy-Michelle-s-Secret-hXyPVV.png',
    'https://i.bandori.party/u/c/transparent/561Aya-Maruyama-Power-In-Charge-of-Pink-nvYWTd.png',
    'https://i.bandori.party/u/c/transparent/562Aya-Maruyama-Pure-Stage-vCZDTo.png',
    'https://i.bandori.party/u/c/art/a/563Aya-Maruyama-Pure-Surefire-Idol-Pose-gw0epR.png',
    'https://i.bandori.party/u/c/transparent/565Hina-Hikawa-Cool-Genius-Girl-5XsiLX.png',
    'https://i.bandori.party/u/c/transparent/566Hina-Hikawa-Happy-Stage-CClco3.png',
    'https://i.bandori.party/u/c/art/a/567Hina-Hikawa-Power-Mysterious-Beings-Zx6gqL.png',
    'https://i.bandori.party/u/c/transparent/569Chisato-Shirasagi-Happy-Heavily-Guarded-Smile-TZGK7N.png',
    'https://i.bandori.party/u/c/transparent/570Chisato-Shirasagi-Power-Stage-UsoJPg.png',
    'https://i.bandori.party/u/c/art/a/571Chisato-Shirasagi-Cool-Journey-of-Aspiration-MotBQa.png',
    'https://i.bandori.party/u/c/transparent/573Maya-Yamato-Pure-Otaku-Drummer-fKM3J2.png',
    'https://i.bandori.party/u/c/transparent/574Maya-Yamato-Cool-Stage-CT9RVb.png',
    'https://i.bandori.party/u/c/art/a/575Maya-Yamato-Pure-My-Real-Face-kXZRFd.png',
    'https://i.bandori.party/u/c/transparent/577Eve-Wakamiya-Pure-Bushido-9PhD4E.png',
    'https://i.bandori.party/u/c/transparent/578Eve-Wakamiya-Cool-Stage-Nv5f66.png',
    'https://i.bandori.party/u/c/art/a/579Eve-Wakamiya-Happy-Samurai-Should-Help-One-Another-in-Times-of-Need-YxMfaZ.png',
    'https://i.bandori.party/u/c/transparent/581Yukina-Minato-Cool-Isolated-Diva-VzlwZB.png',
    'https://i.bandori.party/u/c/transparent/582Yukina-Minato-Power-Stage-1S2vVB.png',
    'https://i.bandori.party/u/c/art/a/583Yukina-Minato-Happy-Prepare-for-the-Diva-uJMAda.png',
    'https://i.bandori.party/u/c/transparent/585Sayo-Hikawa-Cool-The-Most-Earnest-hRmmeB.png',
    'https://i.bandori.party/u/c/transparent/586Sayo-Hikawa-Pure-Stage-7EKcIa.png',
    'https://i.bandori.party/u/c/art/a/587Sayo-Hikawa-Cool-Double-Trouble-eEj1e3.png',
    'https://i.bandori.party/u/c/transparent/589Lisa-Imai-Happy-Mood-Maker-hL05v3.png',
    'https://i.bandori.party/u/c/transparent/590Lisa-Imai-Cool-Stage-6DiQB9.png',
    'https://i.bandori.party/u/c/art/a/591Lisa-Imai-Pure-Scars-of-Effort-M8SezW.png',
    'https://i.bandori.party/u/c/transparent/593Ako-Udagawa-Power-Cool-Drummer-4ka0VO.png',
    'https://i.bandori.party/u/c/transparent/594Ako-Udagawa-Cool-Stage-MA25I9.png',
    'https://i.bandori.party/u/c/art/a/595Ako-Udagawa-Power-Little-Devil-ZgRO8a.png',
    'https://i.bandori.party/u/c/transparent/597Rinko-Shirokane-Pure-Crowds-are-my-Weakness-t8fZeB.png',
    'https://i.bandori.party/u/c/transparent/598Rinko-Shirokane-Happy-Stage-3tASD5.png',
    'https://i.bandori.party/u/c/art/a/599Rinko-Shirokane-Cool-I-What-Should-I-do-DqAWAq.png',
    'https://i.bandori.party/u/c/art/a/601Kasumi-Toyama-Cool-Cherry-Blossom-Viewing-with-Everyone-ff10E8.png',
    'https://i.bandori.party/u/c/art/a/602Arisa-Ichigaya-Pure-Under-the-Blooming-Sakura-r2Lv2u.png',
    'https://i.bandori.party/u/c/art/a/603Kokoro-Tsurumaki-Pure-Sakura-Special-p1a1kK.png',
    'https://i.bandori.party/u/c/art/a/606Yukina-Minato-Cool-Diva-of-the-Birdcage-VLhxdV.png',
    'https://i.bandori.party/u/c/art/a/607Ako-Udagawa-Cool-Dedicated-Ambitions-J13bsq.png',
    'https://i.bandori.party/u/c/art/a/608Rinko-Shirokane-Pure-Pure-Enthusiasm-SNgOLJ.png',
    'https://i.bandori.party/u/c/art/a/611Kokoro-Tsurumaki-Happy-The-Great-Detective-Onboard-gzqEhF.png',
    'https://i.bandori.party/u/c/art/a/612Kaoru-Seta-Happy-HaroHapi-Thief-hhZP6h.png',
    'https://i.bandori.party/u/c/art/a/613Misaki-Okusawa-Power-Love-Confession-JLV9sE.png',
    'https://i.bandori.party/u/c/art/a/616Rimi-Ushigome-Happy-The-Sister-I-Admire-YQMAft.png',
    'https://i.bandori.party/u/c/art/a/617Saaya-Yamabuki-Power-Good-Luck-Bread-BdmRDO.png',
    'https://i.bandori.party/u/c/art/a/618Tae-Hanazono-Power-Staying-Over-in-my-Pajamas-qoBKiv.png',
    'https://i.bandori.party/u/c/art/a/621Ran-Mitake-Pure-The-Proof-That-I-am-Here-LQRAH7.png',
    'https://i.bandori.party/u/c/art/a/622Kasumi-Toyama-Pure-Sound-of-the-Beginning-cWKMRq.png',
    'https://i.bandori.party/u/c/art/a/623Hina-Hikawa-Cool-Several-Light-Years-of-Light-BQ1ngU.png',
    'https://i.bandori.party/u/c/art/a/626Moca-Aoba-Cool-The-Feelings-I-ll-Accept-0JHPX7.png',
    'https://i.bandori.party/u/c/art/a/627Ran-Mitake-Pure-Sunset-Memories-rSrJqu.png',
    'https://i.bandori.party/u/c/art/a/628Tsugumi-Hazawa-Cool-Lets-make-a-band-0cpfJq.png',
    'https://i.bandori.party/u/c/art/a/631Kanon-Matsubara-Happy-Bunny-Hunt-MQOx8p.png',
    'https://i.bandori.party/u/c/art/a/632Arisa-Ichigaya-Happy-Arisa-in-Wonderland-YWAMCK.png',
    'https://i.bandori.party/u/c/art/a/633Tae-Hanazono-Cool-The-Great-Bunny-Strategy-Q0OxHw.png',
    'https://i.bandori.party/u/c/art/a/636Aya-Maruyama-Power-My-First-Aspiration-fWtZ05.png',
    'https://i.bandori.party/u/c/art/a/637Chisato-Shirasagi-Power-Place-of-Purity-0ccKTw.png',
    'https://i.bandori.party/u/c/art/a/638Eve-Wakamiya-Cool-Model-Mode-0eus9i.png',
    'https://i.bandori.party/u/c/art/a/641Rimi-Ushigome-Pure-Beautiful-Kitten-Xhp1mk.png',
    'https://i.bandori.party/u/c/art/a/642Tomoe-Udagawa-Pure-Wedding-Crashers-1oNzfL.png',
    'https://i.bandori.party/u/c/art/a/643Saaya-Yamabuki-Cool-A-Bride-for-Only-One-Day-plInpd.png',
    'https://i.bandori.party/u/c/art/a/646Rinko-Shirokane-Cool-Acquainted-Phone-Call-lBi7lM.png',
    'https://i.bandori.party/u/c/art/a/647Yukina-Minato-Cool-4-People-at-the-Cafeteria-KQ777K.png',
    'https://i.bandori.party/u/c/art/a/648Lisa-Imai-Happy-Indispensable-Existence-W8RKt4.png',
    'https://i.bandori.party/u/c/art/a/651Hina-Hikawa-Happy-A-Very-Important-Tanzaku-MLEwG4.png',
    'https://i.bandori.party/u/c/art/a/652Sayo-Hikawa-Happy-The-Tanabata-We-Spend-Together-pj9cl3.png',
    'https://i.bandori.party/u/c/art/a/653Aya-Maruyama-Power-Working-at-Tanabata-STbISY.png',
    'https://i.bandori.party/u/c/art/a/656Tomoe-Udagawa-Power-The-Patient-in-Pajamas-Xy1qBj.png',
    'https://i.bandori.party/u/c/art/a/657Ako-Udagawa-Power-Nurse-Just-for-Tomoe-YmgNmA.png',
    'https://i.bandori.party/u/c/art/a/658Hagumi-Kitazawa-Pure-The-Source-of-Being-Healthy-2G3PAh.png',
    'https://i.bandori.party/u/c/art/a/661Chisato-Shirasagi-Pure-Friends-I-Can-Trust-xCXg5l.png',
    'https://i.bandori.party/u/c/art/a/662Eve-Wakamiya-Pure-Bouquet-Filled-With-My-Feelings-XRTqPS.png',
    'https://i.bandori.party/u/c/art/a/663Maya-Yamato-Power-Moved-to-Tears-qQeEig.png',
    'https://i.bandori.party/u/c/art/a/666Lisa-Imai-Cool-Dazzling-Sunlight-NJRSvb.png'
  ];
  
  // Función para seleccionar una imagen aleatoria
  function selectRandomImage() {
    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImageUrl = images[randomIndex];
    document.getElementById('randomImage').src = randomImageUrl;
  }
  
  // Llama a la función al cargar la página para mostrar una imagen aleatoria
  window.onload = selectRandomImage;