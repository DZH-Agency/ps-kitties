<template>
  <div class="gs-wrapper">
    <div class="ps-container">
      <div class="gs">
        <h2 class="gs__title">Gaming Team</h2>
        <p class="gs__text">We've been building and growing so fast recently, it's time we update you on the incredible
          people we've onboarded!</p>
        
        <div class="gs-list">
          <div
            class="gs-list-item"
            v-for="(member, idx) in $options.members"
            :key="idx"
          >
            <img :src="member.img" alt="" class="gs-list-item__img">
            <div class="gs-list-item-info">
              <div class="gs-list-item-info__name">{{ member.name }}</div>
              <div class="gs-list-item-info__position">{{ member.position }}</div>
              <p class="gs-list-item-info__description" v-html="member.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GamingSection', members: [{
    name: 'Xoakin R.',
    position: 'Game Director',
    img: require('static/img/GamingSection/members/xoakin.png'),
    description: `
    <strong>Director at two gaming studios and head of operations at Octosoft Professionals. Worked with major companies like Google, Uber and Amazon on a variety of projects.</strong>
<br>
<br>
Xoakin has 11 years in operations and 6 years in game development. They have taken about 100 different products between webapps, apps and video games to market. They also have a major marketing and data background.
    `,
  }, {
    name: 'Mer Peacock',
    position: 'Game Producer',
    img: require('static/img/GamingSection/members/mer.png'),
    description: `
    <strong>Octosoft Professionals, Purple Tree Studio, PressOver, NearVerse</strong>
<br>
<br>
Mer Peacock is a digital marketing specialist, project manager and brand developer. Her background in psychology makes her the ideal person when it comes to listening to clients and transmitting their visions. Mer has worked in a variety of industries from Real Estate to Video Games. Her diverse background makes her an ideal game producer.
`,
  }, {
    name: 'Melany Goldkorn',
    position: 'Economy Designer',
    img: require('static/img/GamingSection/members/melany.png'),
    description: `
   <strong> Octosoft, Zurich, Kraken Gaming</strong>
<br>
<br>
Melany Goldkorn is part of the Data Sciences department and has advanced skills regarding databases, finances, and business. Melany holds a degree in Actuarial Science from the University of Buenos Aires and has more than ten years of experience working with different kinds of companies helping them develop and grow their business. She currently works as an economy designer, as well as a financial consultant in Octosoft Professionals.
`,
  }, {
    name: 'Lucas Rossi',
    position: 'Brand and Graphic Designer',
    img: require('static/img/GamingSection/members/lucas-rossi.png'),
    description: `
<strong>Octosoft, CoderHouse Instructor, Professor at Da Vinci University, GoD Design Studio</strong>
<br>
<br>
Lucas Rossi is part of the Design department. He specializes in accessibility and project planning from a design thinking methodology. Lucas holds a degree from the University of Buenos Aires and has over a decade of experience in brand and digital product design. He won the Brand Identity contest for the Expo 2023 and his project has been recognized by the International Bureau of Exposition in Paris.
`,
  }, {
    name: 'Luis Grimaldi',
    position: 'Blockchain Developer',
    img: require('static/img/GamingSection/members/luis.png'),
    description: `
<strong>White Rabbit, Stader Labs, Bonne Et Filou, Status, SB Evolution Landscape</strong>
<br>
<br>
Luis Grimaldi is a blockchain developer that enables secure digital transactions by creating systems to record and store blockchain data to prevent changes or hacks. Design secure blockchain technologies, develop application features and interfaces web3, and maintain client and server-side applications.
<br>
<br>
Luis studied Engineer Mechanic at the University of Carabobo and has over 7 years of experience in the field working with software developers, creating apps, dapps, and NFT projects. He is always enthusiastic about working with new ideas and has worked with both big companies and developed his own successful entrepreneurship.
`,
  }, {
    name: 'Johanna Knopoff',
    position: 'Designer',
    img: require('static/img/GamingSection/members/johanna.png'),
    description: `
    <strong>Octosoft, Undead Sea Fruits, Spores Network, Sporesverse</strong>
<br>
<br>
Johanna (aka Joy) is a self-taught designer. She is mainly dedicated to illustration, but she combines knowledge of visual arts, graphic design, and photography to achieve her style. She has worked with multiple clients from different fields in recent years, which has helped her develop her portfolio and gain knowledge in a wide variety of disciplines, such as preparing designs for textile prints, publishing, posters, or for different digital platforms and networks. Her specialties are the design of characters, objects, animals, portraits, and posters. She designed covers for EPs and for books, and has experience in art direction, film, and storyboarding. In her free time, she really enjoys crafts, such as bookbinding, reading, or cooking.
`,
  }, {
    name: 'Lucas Mallo',
    position: 'Game Programmer (Unity)',
    img: require('static/img/GamingSection/members/lucas.png'),
    description: `
<strong>Octosoft Professionals, Kraken Gaming, Smart Eye Technology</strong>
<br>
<br>
Lucas is a Unity front-end and back-end developer. He is an expert C# programmer who has created games, metaverses, and even VR simulators to train a wide variety of professionals.
<br>
<br>
Lucas studied game development and programming at The First School of Multimedia Art Da Vinci. he is passionate about programming and always challenges himself to improve, when he is not working on a project he spends his time with his passion, video games, and going to the movies
`,
  }, {
    name: 'Gaston Nehual Pascale',
    position: 'Level and Game Designer',
    img: require('static/img/GamingSection/members/gaston.png'),
    description: `
<strong>Octosoft Professionals, Undead Sea Fruits, Kraken Gaming, Sporesverse, Smart Eye Technology</strong>
<br>
<br>
Nehual Pascale is an Unreal developer, Game designer, 3D object modeler, Level designer, and Architect with experience in construction and metaverse development. He has a diverse background in multiple areas of design, with a strong belief in team building. He studied Architecture at the UBA (University of Buenos Aires), and then trained as a Game Designer and Level Designer specializing in Unreal Engine. Nowadays he seeks to expand his knowledge in the area of programming and systems, trying to complement his design skills. He is always open to new knowledge and experiences that allow him to grow professionally. He currently works as a professor of the Level Design subject in the Technician in Video Game Development at UADE.
`,
  }, {
    name: 'Ignacio “Eru” Zambrano',
    position: 'Lead Programmer (Unity)',
    img: require('static/img/GamingSection/members/egnacio.png'),
    description: `
<strong>Octosoft Professionals, Schema, CoderHouse Instructor, NearVerse, Smart Eye Technology</strong>
<br>
<br>
Eru Zambrano is part of the development team, and a highly proactive video game and app developer himself. As a programmer, his main focus is creating new and exciting features for a wide variety of applications, from networking solutions and procedural asset creation to custom game design custom tools.
<br>
<br>
Eru is a self-taught programmer, who then studied at the Argentine University of Enterprise and
is finalizing his bachelor's degree in video game development to further enhance his abilities. He's also a passionate music composer, having finished a bachelor's degree in Modern Composition at the National University of Quilmes. He has experience in teaching programming in c# and C++, specifically for Unity and Unreal Engine,as well as Quality Assurance, with a focus on Code Review practices.

    `,
  }, {
    name: 'Mateo Tedin',
    position: 'Lead Concept Artist',
    img: require('static/img/GamingSection/members/mateo.png'),
    description: `
    <strong>Cryptopia, Octosoft Professionals, Undead Sea Fruits, Sporesverse, Mercado Libre</strong>
<br>
<br>
Mateo is an illustrator and conceptual artist living in Buenos Aires, Argentina. He has done editorial illustrations for history books; fantasy art for characters, accessories, and settings; and conceptual art for video games. Mateo has also honed his artistic talents via a variety of academic courses and degrees. Mateo also has a prolific career as a freelance artist.
    `,
  }, {
    name: 'Manic Pixel',
    position: 'Level and Game Designer',
    img: require('static/img/GamingSection/members/manic.png'),
    description: `
    <strong>Prolific Freelance Video Game Developer, GameEver Studio, Octosoft Professionals</strong>
<br>
<br>
Manic Pixel is a prolific artist, game designer and teacher. Because she wears so many hats, she's worked amazingly with a variety of different people, and uniting different visions to create a professional product; and can communicate with all different parts of the production team.
<br>
<br>
She studied Fine Arts and Pedagogy at the National University of Rosario; and also Traditional Animation at the EPA and Music at the Provincial School of Music. She has worked professionally in many different media, from comics, music, illustration, games, game journalism and more; and is currently also a Game Design teacher at Image Campus.
<br>
<br>
She loves to go solo dev as well as working with teams, and she cares about games with a social impact: LGTB+, educational, ecologist, and about social rights in general.
<br>
<br>
She has also won multiple indie gaming awards, including an IGN Latin America award for best indie game.

    `,
  }, {
    name: 'Matias Pelegri',
    position: 'UI and Game Designer',
    img: require('static/img/GamingSection/members/matias.png'),
    description: `
    <strong>Worked with NearVerse, unreleased double A video game, NEAR Protocol</strong>
<br>
<br>
Matias is a self-taught design generalist who has been learning for the past decade, and considered in many circles as one of the best designers around. In that time, he has worked on logos, photomontages, digital collages, albums and book covers, and grew as a great UX/UI designer. Aside from design, Matias has knowledge and experience with computer hardware, live streaming, gaming journalism, level design, game design, graphic design and branding.
<br>
<br>
Matias is currently a game dev at Octosoft Professionals, Undead Sea Fruits and Kraken Gaming.
`,
  }, {
    name: 'William Idrissi',
    position: 'Blockchain Developer',
    img: require('static/img/GamingSection/members/william.png'),
    description: `
    <strong>NearVerse Founder, Alfa Engineering Founder, DevCo Co-Owner</strong>
<br>
<br>
Fullstack software engineer and an experienced growth leader and strategist with a demonstrated history of working in the Sales, Business development and marketing industries. Blockchain, tech, and real estate are my passions. He is motivated by Nonprofit Organizations, International Relations, Fundraising, and Policy Analysis.
<br>
<br>
As a Programmer/Designer they find themselves primarily focused on web applications, education technology, blockchain and mobile games. Experienced with game development tools such as Unity, unreal engine and Godot. Proficient with HTML, CSS and JavaScript.
`,
  }, {
    name: 'Alex Steff',
    position: 'Sound and Audio Designer, Composer',
    img: require('static/img/GamingSection/members/alex.png'),
    description: `
    <strong>Netflix, Amazon, Disney, Obey Me, Jay and Silent Bob Mall Brawl</strong>
<br>
<br>
Alex is a prolific sound and audio designer who has worked with most of the multimedia giants, as well as being a prolific indie and not-so-indie sound designer. She is also an experienced composer and musician, specializing in piano!
`,
  }],
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/GamingSection.scss";
</style>
