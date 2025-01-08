import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const testimonials = [
    {
      name: "Natasha Mith",
      country: "Sydney, Australia",
      message:
        "Working with this team was incredible! They took our vision and turned it into a reality that surpassed our expectations. Our home now feels both stylish and welcoming, and we couldn't be happier!",
      image: "https://i.ibb.co/jbcy41w/img-1.png",
    },
    {
      name: "Brunilda Ireneo",
      country: "New York, USA",
      message:
        "From the initial consultation to the final touches, every step was handled with care and precision. Their attention to detail brought our space to life in ways we never imagined. We highly recommend them!",
      image: "https://i.ibb.co/7JRFtSv/img-2.png",
    },
    {
      name: "Willy Patrick",
      country: "Berlin, Germany",
      message:
        "The team’s creativity and professionalism were top-notch. They took the time to understand our preferences and created a space that truly feels like home. It's stylish, functional, and reflects our personality perfectly.",
      image: "https://i.ibb.co/3y2dx5z/img-3.png",
    },
    {
      name: "Raymond Galario",
      country: "Rom, Italy",
      message:
        "We are absolutely thrilled with the results. The design is elegant, modern, and practical—exactly what we wanted! Every room is a masterpiece. Thank you for making our dream home a reality.",
      image: "https://i.ibb.co/WVvZTjf/img-4.png",
    },
  ];

  for (const testimonial of testimonials) {
    await prisma.testimonials.create({
      data: testimonial,
    });
  }

  const teamMembers = [
    {
      image: "https://i.ibb.co/3cd1ScB/team-1.png",
      name: "Basil Prissy",
      position: "Design, United Kingdom",
      description:
        "Basil Prissy is a visionary interior designer with a passion for creating elegant, minimalist spaces that evoke a sense of peace and balance. With years of experience, he specializes in transforming ordinary rooms into extraordinary living spaces.",
      bio: "<p>Born and raised in the bustling city of London, Basil Prissy developed a love for design and architecture from an early age. His passion for clean lines and minimalist aesthetics began during his studies at the Royal College of Art, where he honed his skills in contemporary design and functionality. After graduating with honors, Basil launched his career in interior design, quickly making a name for himself by blending modern elements with traditional charm.</p><br><p>Over the years, Basil has worked on a wide variety of projects, from luxury apartments in London to vacation homes on the Mediterranean coast. His keen eye for detail and ability to create spaces that are both functional and visually striking have earned him a loyal clientele. Basil believes that design is more than just about appearances; it’s about creating spaces that reflect the people who live in them. He strives to make every room not only aesthetically pleasing but also practical and comfortable.</p><br><p>Now a senior designer at the firm, Basil continues to push the boundaries of interior design, focusing on sustainability and the integration of natural elements into his work. Whether it’s a modern penthouse or a rustic cottage, Basil approaches each project with the same level of dedication and creativity.</p>",
      functionality:
        "<p>Basil’s design philosophy revolves around the harmony between simplicity and functionality. He believes that a well-designed space doesn’t need to be cluttered to feel luxurious. Instead, it’s about finding the right balance between form and function, ensuring that every piece in a room has a purpose. His approach prioritizes clean lines, neutral tones, and open spaces, allowing for both comfort and elegance. Basil’s ultimate goal is to create environments that are easy to live in, while also being visually stunning.</p>",
      email: "basil.prissy@gmail.com",
      phone: "+1 (378) 400-1234",
      website: "www.basil-prissy.com",
      twitter: "https://twitter.com/",
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
      qa: [
        {
          question: "What inspires your design style?",
          answer:
            "I'm constantly inspired by nature and architecture. I love combining natural textures like wood and stone with sleek modern lines to create spaces that feel both timeless and contemporary.",
        },
        {
          question: "What’s your favorite project to date?",
          answer:
            "I use tools such as Adobe Photoshop, Illustrator, and Sketch for design work. I also use InVision for prototyping and gathering feedback from clients.",
        },
        {
          question: "What’s your design motto?",
          answer:
            "Less is more. I believe simplicity leads to elegance, and when a space is uncluttered, it allows you to truly appreciate the design elements.",
        },
        {
          question: "What’s your favorite material to work with?",
          answer:
            "I have a deep love for natural wood. It adds warmth and texture to any space, making it feel more inviting.",
        },
      ],
      design: 90,
      management: 80,
      client: 65,
    },
    {
      image: "https://i.ibb.co/k0xXbmP/team-2.png",
      name: "Natasha Julie",
      position: "Design, Australia",
      description:
        "Natasha Julie is an innovative interior designer known for her bold use of colors and textures. She has a flair for creating dynamic, vibrant spaces that reflect her clients’ unique personalities while maintaining a strong sense of cohesion and elegance.",
      email: "natasha.julie@gmail.com",
      phone: "+1 (378) 400-1234",
      website: "www.natasha-julie.com",
      twitter: "https://twitter.com/",
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      bio: "<p>Hailing from the vibrant city of Sydney, Natasha Julie’s journey into interior design started with a fascination for art and fashion, both of which greatly influence her work today. After earning a degree in Interior Design from the University of New South Wales, Natasha spent several years working in different design studios, where she quickly became known for her distinctive style—a mix of bold, colorful accents and rich textures that stand out in any space.</p><br><p>Natasha’s design philosophy is all about balance. She believes that every space should reflect the personality of its inhabitants while also serving a practical function. With a focus on client collaboration, she loves creating custom solutions that elevate everyday living. Whether it’s a cozy family home or a high-end apartment, Natasha approaches each project with a fresh perspective, bringing a sense of vibrancy and warmth to every room.</p><br><p>In her career, Natasha has worked on a wide range of projects, from residential interiors to boutique hotels and retail spaces. Her work has been featured in several design magazines, and she’s won multiple awards for her creative approach. Despite her success, she remains grounded and passionate about delivering spaces that are both functional and aesthetically rich. Now based in London, Natasha continues to inspire with her eclectic, playful designs that blend modernity with comfort.</p>",
      functionality:
        "<p>For Natasha, simplicity and functionality are rooted in a design’s ability to tell a story without unnecessary complexity. She believes in using bold colors and patterns to make statements but ensures that every element has a purpose. Whether it’s a vibrant accent wall or carefully chosen furniture, each part of her design serves a dual role of beauty and utility. By seamlessly blending the two, Natasha ensures that her designs are not only eye-catching but also comfortable and practical for everyday living.</p>",
      qa: [
        {
          question: "What drives your design choices?",
          answer:
            "I’m driven by emotion and energy. I love spaces that make people feel something—whether it’s joy, calm, or excitement. I aim to evoke that through my use of color and texture.",
        },
        {
          question: "What has been your most rewarding project?",
          answer:
            "Designing a boutique hotel in Bali was incredibly fulfilling. The mix of cultural influences and the lush surroundings allowed me to be adventurous with materials and colors.",
        },
        {
          question: "How do you define your design style?",
          answer:
            "I would say my style is eclectic and bold. I love mixing vibrant colors, rich textures, and unexpected elements to create spaces that are unique yet cohesive.",
        },
      ],
      design: 88,
      management: 60,
      client: 95,
    },
    {
      image: "https://i.ibb.co/chNWHTS/team-3.png",
      name: "John Smith",
      position: "Design, United States",
      description:
        "John Smith is an experienced interior designer known for his timeless, minimalist approach to design. His work focuses on creating serene, clutter-free spaces that emphasize natural light and balance, delivering sophisticated interiors with a calming presence.",

      email: "john.smith@gmail.com",
      phone: "+1 (378) 400-1234",
      website: "www.john-smith.com",

      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
      bio: "<p>Born in New York, John Smith’s early years were spent surrounded by the city's architectural marvels, sparking his interest in design. After studying at the Parsons School of Design, John refined his style, focusing on minimalism and functionality. Early in his career, he worked with renowned architects, where he learned the importance of integrating natural light and open spaces into his designs. His designs prioritize function while remaining visually captivating through the use of neutral palettes, clean lines, and natural materials.</p><br><p>John’s signature style combines modern minimalism with a warm, inviting atmosphere. His projects, which range from urban apartments to countryside retreats, are known for their simplicity and elegance. He believes that less is more, and that the true essence of design lies in restraint. For John, the role of the designer is to create spaces that enhance well-being, offering a refuge from the busyness of everyday life.</p><br><p>In addition to his design work, John is a passionate advocate for sustainable building practices. He often incorporates eco-friendly materials and energy-efficient solutions into his designs. His work has been featured in leading design publications, and he has been recognized for his ability to create timeless spaces that feel both modern and classic. Today, John is a respected figure in the design world, known for his calm, thoughtful approach and meticulous attention to detail.</p>",
      functionality:
        "<p>John believes that true simplicity comes from thoughtful design choices that serve a purpose. His approach is centered around creating spaces that are both aesthetically pleasing and highly functional. For John, every element in a room must have a reason to be there—whether it’s maximizing light, creating flow, or offering practical storage solutions. His minimalist designs often feature clean lines, neutral tones, and a focus on natural materials, providing a serene and harmonious environment for everyday living.</p>",
      qa: [
        {
          question: "What inspires your design work?",
          answer:
            "I’m deeply inspired by nature and architecture. I believe that the best designs allow natural elements—light, air, and space—to guide the flow and mood of a room.",
        },
        {
          question: "What’s your most memorable project?",
          answer:
            "A modern cabin in the mountains stands out. Balancing contemporary design with the rugged natural surroundings was challenging but incredibly rewarding.",
        },
        {
          question: "What’s your design philosophy?",
          answer:
            "My philosophy is centered on minimalism—letting spaces breathe by removing unnecessary clutter, allowing each element to stand out and serve a purpose.",
        },
      ],

      design: 60,
      management: 80,
      client: 70,
    },
    {
      image: "https://i.ibb.co/sQmpKjr/team-4.png",
      name: "Nora Owen",
      position: "Design, Ireland",
      description:
        "Nora Owen is a creative and dynamic interior designer with a passion for transforming spaces through innovative design solutions. She excels at combining bold concepts with practicality, creating environments that are both aesthetically striking and functional.",

      email: "nora.owen@gmail.com",
      phone: "+1 (378) 400-1234",
      website: null,

      twitter: "https://twitter.com/",
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      bio: "<p>Nora Owen was born in Dublin, Ireland, and her love for design blossomed from an early age, influenced by the rich history and vibrant culture around her. After completing her studies in interior architecture at the Dublin Institute of Design, Nora quickly gained recognition for her ability to fuse contemporary design with traditional elements. Her background in architecture gives her a deep understanding of space, structure, and balance, which she integrates into every project.</p><br><p>Nora’s work is characterized by bold color schemes, creative lighting solutions, and a fearless use of texture. She loves experimenting with unusual materials and pushing the boundaries of conventional design. Whether it's a modern urban loft or a historical building in need of restoration, Nora’s approach always incorporates the latest design trends with a deep respect for the space’s original character.</p><br><p>Her career has taken her across Europe and beyond, working on a diverse range of projects, from luxury hotels to urban apartments. Despite her global experiences, Nora remains deeply connected to her Irish roots, often drawing inspiration from the rugged natural landscapes and the architectural heritage of her home country. Her designs are celebrated for being both innovative and highly functional, offering her clients spaces that are not only beautiful but also livable.</p>",
      functionality:
        "<p>Nora believes that simplicity should never compromise creativity. Her design ethos revolves around balancing bold, eye-catching elements with the practical needs of everyday life. She creates spaces that are functional, ensuring they serve their intended purpose while still reflecting a strong design narrative. Nora is known for her attention to detail and her ability to seamlessly combine form and function, resulting in spaces that are both practical and visually inspiring.</p>",
      qa: [
        {
          question: "What drives your design style?",
          answer:
            "I’m motivated by the challenge of balancing creativity with functionality. I love designing spaces that tell a story while still being highly practical and adaptable.",
        },
        {
          question: "What has been your most challenging project?",
          answer:
            "A historical building renovation in Italy. Balancing the preservation of original features with modern design elements was incredibly challenging, but the final result was worth it.",
        },
        {
          question: "How would you describe your design philosophy?",
          answer:
            "My philosophy is to push boundaries while staying true to the essence of a space. I believe that good design should be bold but not overwhelming.",
        },
        {
          question: "What’s your favorite design trend?",
          answer:
            "I love incorporating sustainable, eco-friendly materials into my designs. It's not only good for the environment but also adds unique textures and elements to the space.",
        },
      ],

      design: 90,
      management: 80,
      client: 65,
    },
    {
      image: "https://i.ibb.co/02wWGpW/team-5.png",
      name: "Sofia Carter",
      position: "Design, Australia",
      description:
        "Sofia is a designer from Australia. She has a passion for creating beautiful and functional designs that resonate with clients worldwide.",

      email: "sofia.carter@gmail.com",
      phone: "+1 (378) 400-1234",
      website: null,

      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
      bio: "<p>Basil Prissy is a talented designer hailing from the vibrant landscapes of Australia. With an unwavering passion for crafting both aesthetically pleasing and highly functional designs, Basil has garnered recognition for his exceptional skills in the design realm. Drawing from a rich background in design, he has cultivated a unique style that resonates with clients worldwide.</p><br><p>Basil's journey in the design world has been marked by collaboration with diverse clientele, spanning continents and industries. His commitment to excellence and keen eye for detail have been instrumental in delivering impactful solutions tailored to each client's unique needs.</p><br><p>Outside of his professional pursuits, Basil finds inspiration in the world around him, drawing from the beauty of nature and the dynamism of global culture. His creative endeavors extend beyond the confines of his workspace, often exploring new avenues for artistic expression.</p><br><p>With an ethos rooted in innovation and a drive for continuous improvement, Basil Prissy remains dedicated to pushing the boundaries of design and leaving a lasting impression on the creative landscape.</p><br><p>This biography captures Basil's professional journey, his dedication to design excellence, and his broader creative ethos.</p>",
      functionality:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in belief.</p><br><p>There are many variations of passages of Lorem Ipsum from available, but the majority have suffered alteration in some form, njecthumour</p>",
      qa: [
        {
          question: "What is your design process?",
          answer:
            "My design process involves understanding the client's needs and goals, conducting research, creating wireframes, and then developing the final design. I focus on creating designs that are both visually appealing and functional.",
        },
        {
          question: "What tools do you use for design?",
          answer:
            "I use tools such as Adobe Photoshop, Illustrator, and Sketch for design work. I also use InVision for prototyping and gathering feedback from clients.",
        },
        {
          question: "How do you stay updated on design trends?",
          answer:
            "I stay updated on design trends by reading blogs, attending conferences, and following other designers on social media.",
        },
      ],

      design: 90,
      management: 80,
      client: 65,
    },
    {
      image: "https://i.ibb.co/Lz10VNN/team-6.png",
      name: "Avery Jackson",
      position: "Design, Australia",
      description:
        "Avery is a designer from Australia. He has a passion for creating beautiful and functional designs that resonate with clients worldwide.",

      email: "avery.jackson@gmail.com",
      phone: "+1 (378) 400-1234",
      website: null,

      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      bio: "<p>Basil Prissy is a talented designer hailing from the vibrant landscapes of Australia. With an unwavering passion for crafting both aesthetically pleasing and highly functional designs, Basil has garnered recognition for his exceptional skills in the design realm. Drawing from a rich background in design, he has cultivated a unique style that resonates with clients worldwide.</p><br><p>Basil's journey in the design world has been marked by collaboration with diverse clientele, spanning continents and industries. His commitment to excellence and keen eye for detail have been instrumental in delivering impactful solutions tailored to each client's unique needs.</p><br><p>Outside of his professional pursuits, Basil finds inspiration in the world around him, drawing from the beauty of nature and the dynamism of global culture. His creative endeavors extend beyond the confines of his workspace, often exploring new avenues for artistic expression.</p><br><p>With an ethos rooted in innovation and a drive for continuous improvement, Basil Prissy remains dedicated to pushing the boundaries of design and leaving a lasting impression on the creative landscape.</p><br><p>This biography captures Basil's professional journey, his dedication to design excellence, and his broader creative ethos.</p>",
      functionality:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in belief.</p><br><p>There are many variations of passages of Lorem Ipsum from available, but the majority have suffered alteration in some form, njecthumour</p>",
      qa: [
        {
          question: "What is your design process?",
          answer:
            "My design process involves understanding the client's needs and goals, conducting research, creating wireframes, and then developing the final design. I focus on creating designs that are both visually appealing and functional.",
        },
        {
          question: "What tools do you use for design?",
          answer:
            "I use tools such as Adobe Photoshop, Illustrator, and Sketch for design work. I also use InVision for prototyping and gathering feedback from clients.",
        },
        {
          question: "How do you stay updated on design trends?",
          answer:
            "I stay updated on design trends by reading blogs, attending conferences, and following other designers on social media.",
        },
      ],

      design: 90,
      management: 80,
      client: 65,
    },
    {
      image: "https://i.ibb.co/wQ9c8G7/team-7.png",
      name: "Albert Kylee",
      position: "Design, Australia",
      description:
        "Albert is a designer from Australia. He has a passion for creating beautiful and functional designs that resonate with clients worldwide.",

      email: "albert.kylee@gmail.com",
      phone: "+1 (378) 400-1234",
      website: null,

      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      bio: "<p>Basil Prissy is a talented designer hailing from the vibrant landscapes of Australia. With an unwavering passion for crafting both aesthetically pleasing and highly functional designs, Basil has garnered recognition for his exceptional skills in the design realm. Drawing from a rich background in design, he has cultivated a unique style that resonates with clients worldwide.</p><br><p>Basil's journey in the design world has been marked by collaboration with diverse clientele, spanning continents and industries. His commitment to excellence and keen eye for detail have been instrumental in delivering impactful solutions tailored to each client's unique needs.</p><br><p>Outside of his professional pursuits, Basil finds inspiration in the world around him, drawing from the beauty of nature and the dynamism of global culture. His creative endeavors extend beyond the confines of his workspace, often exploring new avenues for artistic expression.</p><br><p>With an ethos rooted in innovation and a drive for continuous improvement, Basil Prissy remains dedicated to pushing the boundaries of design and leaving a lasting impression on the creative landscape.</p><br><p>This biography captures Basil's professional journey, his dedication to design excellence, and his broader creative ethos.</p>",
      functionality:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in belief.</p><br><p>There are many variations of passages of Lorem Ipsum from available, but the majority have suffered alteration in some form, njecthumour</p>",
      qa: [
        {
          question: "What is your design process?",
          answer:
            "My design process involves understanding the client's needs and goals, conducting research, creating wireframes, and then developing the final design. I focus on creating designs that are both visually appealing and functional.",
        },
        {
          question: "What tools do you use for design?",
          answer:
            "I use tools such as Adobe Photoshop, Illustrator, and Sketch for design work. I also use InVision for prototyping and gathering feedback from clients.",
        },
        {
          question: "How do you stay updated on design trends?",
          answer:
            "I stay updated on design trends by reading blogs, attending conferences, and following other designers on social media.",
        },
      ],

      design: 90,
      management: 80,
      client: 65,
    },
    {
      image: "https://i.ibb.co/fSyR0vL/team-8.png",
      name: "Giana Mateo",
      position: "Design, Australia",
      description:
        "Giana is a designer from Australia. She has a passion for creating beautiful and functional designs that resonate with clients worldwide.",

      email: "giana.mateo@gmail.com",
      phone: "+1 (378) 400-1234",
      website: null,

      facebook: "https://facebook.com/",
      bio: "<p>Basil Prissy is a talented designer hailing from the vibrant landscapes of Australia. With an unwavering passion for crafting both aesthetically pleasing and highly functional designs, Basil has garnered recognition for his exceptional skills in the design realm. Drawing from a rich background in design, he has cultivated a unique style that resonates with clients worldwide.</p><br><p>Basil's journey in the design world has been marked by collaboration with diverse clientele, spanning continents and industries. His commitment to excellence and keen eye for detail have been instrumental in delivering impactful solutions tailored to each client's unique needs.</p><br><p>Outside of his professional pursuits, Basil finds inspiration in the world around him, drawing from the beauty of nature and the dynamism of global culture. His creative endeavors extend beyond the confines of his workspace, often exploring new avenues for artistic expression.</p><br><p>With an ethos rooted in innovation and a drive for continuous improvement, Basil Prissy remains dedicated to pushing the boundaries of design and leaving a lasting impression on the creative landscape.</p><br><p>This biography captures Basil's professional journey, his dedication to design excellence, and his broader creative ethos.</p>",
      functionality:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in belief.</p><br><p>There are many variations of passages of Lorem Ipsum from available, but the majority have suffered alteration in some form, njecthumour</p>",
      qa: [
        {
          question: "What is your design process?",
          answer:
            "My design process involves understanding the client's needs and goals, conducting research, creating wireframes, and then developing the final design. I focus on creating designs that are both visually appealing and functional.",
        },
        {
          question: "What tools do you use for design?",
          answer:
            "I use tools such as Adobe Photoshop, Illustrator, and Sketch for design work. I also use InVision for prototyping and gathering feedback from clients.",
        },
        {
          question: "How do you stay updated on design trends?",
          answer:
            "I stay updated on design trends by reading blogs, attending conferences, and following other designers on social media.",
        },
      ],

      design: 90,
      management: 80,
      client: 65,
    },
  ];

  for (const member of teamMembers) {
    await prisma.team.create({
      data: member,
    });
  }

  const Tags = [
    {
      title: "Minimalist",
      slug: "minimalist",
    },
    {
      title: "Contemporary",
      slug: "contemporary",
    },
    {
      title: "Luxury",
      slug: "luxury",
    },
    {
      title: "Modern",
      slug: "modern",
    },
    {
      title: "Elegant",
      slug: "elegant",
    },
    {
      title: "Functional",
      slug: "functional",
    },
    {
      title: "Stylish",
      slug: "stylish",
    },
    {
      title: "Sustainable",
      slug: "sustainable",
    },
    {
      title: "Vintage",
      slug: "vintage",
    },
    {
      title: "Industrial",
      slug: "industrial",
    },
    {
      title: "Bohemian",
      slug: "bohemian",
    },
    {
      title: "Rustic",
      slug: "rustic",
    },
    {
      title: "Traditional",
      slug: "traditional",
    },
    {
      title: "Eclectic",
      slug: "eclectic",
    },
    {
      title: "Scandinavian",
      slug: "scandinavian",
    },
  ];

  for (const tag of Tags) {
    await prisma.tags.create({
      data: tag,
    });
  }

  const ProjectCategories = [
    {
      title: "Kitchen",
      slug: "kitchen",
    },
    {
      title: "Bedroom",
      slug: "bedroom",
    },
    {
      title: "Bathroom",
      slug: "bathroom",
    },
    {
      title: "Living Area",
      slug: "living-area",
    },
  ];

  for (const category of ProjectCategories) {
    await prisma.projectCategories.create({
      data: category,
    });
  }

  const projects = [
    {
      categories: [ProjectCategories[0], ProjectCategories[3]],
      tags: [Tags[0], Tags[3], Tags[6]],
      title: "Modern Kitchen",
      client_name: "Maris Cory",
      slug: "modern-kitchen",
      image:
        "https://i.ibb.co/nm9NkQD/collov-home-design-a-DGbd-Ts-BZg-unsplash-min.jpg",
      image_large:
        "https://i.ibb.co/Jqdp771/collov-home-design-a-DGbd-Ts-BZg-unsplash.jpg",
      head_image:
        "https://i.ibb.co/tcJf0pd/photo-1565538810643-b5bdb714032a-q-80-w-3087-auto-format-fit-crop-ixlib-rb-4-0.jpg",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: true,
    },
    {
      categories: [ProjectCategories[1]],
      tags: [Tags[0], Tags[3], Tags[6]],
      title: "Modern Bedroom",
      client_name: "Raylene Tempest",
      slug: "modern-bedroom",
      image: "https://i.ibb.co/mbQ9xqS/2-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[2]],
      tags: [Tags[2], Tags[5]],
      title: "Minimal Bathroom",
      client_name: "Winslow Calleigh",
      slug: "minimal-bathroom",
      image: "https://i.ibb.co/mTf10c4/3-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: true,
    },
    {
      categories: [ProjectCategories[3]],
      tags: [Tags[1], Tags[2], Tags[4]],
      title: "Futuruistic Living Area",
      client_name: "Kinley Justice",
      slug: "futuristic-living-area",
      image: "https://i.ibb.co/1GZmFYT/4-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[0]],
      tags: [Tags[5], Tags[7], Tags[9]],
      title: "Multifunctional Kitchen",
      client_name: "Trey Freddie",
      slug: "multifunctional-kitchen",
      image:
        "https://i.ibb.co/DCz0JXz/jean-philippe-delberghe-4jx-Gry4p-Xtc-unsplash-min.jpg",
      image_large:
        "https://i.ibb.co/YQ0Yg0D/photo-1610177534644-34d881503b83-q-80-w-3087-auto-format-fit-crop-ixlib-rb-4-0.jpg",
      head_image:
        "https://images.unsplash.com/photo-1633109611134-c41b5c0bbc1a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[1]],
      tags: [Tags[1], Tags[10], Tags[11]],
      title: "Dreamy Bedroom",
      client_name: "Sequoia Brenna",
      slug: "dreamy-bedroom",
      image: "https://i.ibb.co/6FKYfBr/6-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: true,
    },
    {
      categories: [ProjectCategories[2]],
      tags: [Tags[7], Tags[12]],
      title: "Lux Bathroom",
      client_name: "Terri Devan",
      slug: "lux-bathroom",
      image: "https://i.ibb.co/bQ8Bdrr/7-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1604014237256-11d475e2a2d8?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[3]],
      tags: [Tags[12], Tags[14]],
      title: "Modern Living Area",
      client_name: "Jaxxon Leyton",
      slug: "modern-living-area",
      image: "https://i.ibb.co/pXS86F5/8-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: true,
    },
    {
      categories: [ProjectCategories[0]],
      tags: [Tags[4], Tags[8]],
      title: "Kitchen 1",
      client_name: "Nick Veronica",
      slug: "kitchen-1",
      image: "https://i.ibb.co/t8Zvbq7/9-min.jpg",
      image_large:
        "https://i.ibb.co/c1KDgq4/photo-1613545564241-296299063513-q-80-w-2940-auto-format-fit-crop-ixlib-rb-4-0.jpg",
      head_image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: true,
    },
    {
      categories: [ProjectCategories[1]],
      tags: [Tags[2], Tags[3]],
      title: "Bedroom 1",
      client_name: "Huey Jordan",
      slug: "Bedroom-1",
      image: "https://i.ibb.co/JvbbCNH/10-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: true,
    },
    {
      categories: [ProjectCategories[2]],
      tags: [Tags[1], Tags[4]],
      title: "Bathroom 1",
      client_name: "Corynn Suki",
      slug: "batroom-1",
      image: "https://i.ibb.co/QC6JsW2/11-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image:
        "https://images.unsplash.com/photo-1584069793933-57852d7060ea?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: true,
    },
    {
      categories: [ProjectCategories[3]],
      tags: [Tags[13], Tags[14]],
      title: "Living Area 1",
      client_name: "Camellia Clemency",
      slug: "living-area-1",
      image: "https://i.ibb.co/PM4kfqN/12-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1518012312832-96aea3c91144?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: true,
    },
    {
      categories: [ProjectCategories[0]],
      tags: [Tags[5], Tags[7]],
      title: "Kitchen 2",
      client_name: "Taylor Leighton",
      slug: "kitchen-2",
      image: "https://i.ibb.co/KjhrZK8/13-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1628745277895-106fbff3caf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[1]],
      tags: [Tags[0], Tags[3]],
      title: "Bedroom 2",
      client_name: "Alma Everly",
      slug: "bedroom-2",
      image: "https://i.ibb.co/k635L9w/14-1.jpg",
      image_large:
        "https://images.unsplash.com/photo-1561049933-c8fbef47b329?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[2]],
      tags: [Tags[1], Tags[4]],
      title: "Bathroom 2",
      client_name: "Malone Clinton",
      slug: "bathroom-2",
      image: "https://i.ibb.co/BVDSqwm/15-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1603512500383-f1f87c13ffc4?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[3]],
      tags: [Tags[13], Tags[14]],
      title: "Living Area 2",
      client_name: "Krysten Lecia",
      slug: "living-area-2",
      image: "https://i.ibb.co/4gpsHNc/16-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1596113199003-03babc2bdd2b?q=80&w=2820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image:
        "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[0]],
      tags: [Tags[5], Tags[7]],
      title: "Kitchen 3",
      client_name: "Eddy Kairo",
      slug: "kitchen-3",
      image: "https://i.ibb.co/rxqFyVx/17-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[1]],
      tags: [Tags[0], Tags[3]],
      title: "Bedroom 3",
      client_name: "Hervey Jerald",
      slug: "bedroom-3",
      image: "https://i.ibb.co/J5PzZQY/18-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[2]],
      tags: [Tags[1], Tags[4]],
      title: "Bathroom 3",
      client_name: "Shawna Junior",
      slug: "bathroom-3",
      image: "https://i.ibb.co/98Mh87v/19.jpg",
      image_large:
        "https://images.unsplash.com/photo-1576698483491-8c43f0862543?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[3]],
      tags: [Tags[13], Tags[14]],
      title: "Living Area 3",
      client_name: "Everard Kadence",
      slug: "living-area-3",
      image: "https://i.ibb.co/DfVNTmb/20-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[0]],
      tags: [Tags[5], Tags[7]],
      title: "Kitchen 4",
      client_name: "Karena Tamsyn",
      slug: "kitchen-4",
      image: "https://i.ibb.co/nw91sXj/21-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1600684388091-627109f3cd60?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[1]],
      tags: [Tags[0], Tags[3]],
      title: "Bedroom 4",
      client_name: "Vianne Kylee",
      slug: "bedroom-4",
      image: "https://i.ibb.co/bX4s1Rh/22-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[2]],
      tags: [Tags[1], Tags[4]],
      title: "Bathroom 4",
      client_name: "Fletcher Eve",
      slug: "bathroom-4",
      image: "https://i.ibb.co/nQTLQ8t/23-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1586798271654-0471bb1b0517?q=80&w=3085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[3]],
      tags: [Tags[13], Tags[14]],
      title: "Living Area 4",
      client_name: "Amity Alonzo",
      slug: "living-area-4",
      image: "https://i.ibb.co/wrgrQkV/24-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1551516595-09cb9fcf8db5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[0]],
      tags: [Tags[5], Tags[7]],
      title: "Kitchen 5",
      client_name: "Maxine Cassidy",
      slug: "kitchen-5",
      image: "https://i.ibb.co/6nS18x7/25-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[1]],
      tags: [Tags[0], Tags[3]],
      title: "Bedroom 5",
      client_name: "Nellie Roy",
      slug: "bedroom-5",
      image: "https://i.ibb.co/sCMTDxM/26-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1583845112203-29329902332e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image:
        "https://images.unsplash.com/photo-1585821569331-f071db2abd8d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[2]],
      tags: [Tags[1], Tags[4]],
      title: "Bathroom 5",
      client_name: "Sam Nicholas",
      slug: "bathroom-5",
      image: "https://i.ibb.co/94qTZr1/27-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1620641622503-43554860be67?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[3]],
      tags: [Tags[13], Tags[14]],
      title: "Living Area 5",
      client_name: "Barnabas Frazier",
      slug: "living-area-5",
      image: "https://i.ibb.co/2ytqwhs/28-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[0]],
      tags: [Tags[5], Tags[7]],
      title: "Kitchen 6",
      client_name: "Shawnee Jeff",
      slug: "kitchen-6",
      image: "https://i.ibb.co/4dZbH5G/29-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1556910585-09baa3a3998e?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[1]],
      tags: [Tags[0], Tags[3]],
      title: "Bedroom 6",
      client_name: "Chesley Linden",
      slug: "bedroom-6",
      image: "https://i.ibb.co/q79wFW4/30-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[2]],
      tags: [Tags[1], Tags[4]],
      title: "Bathroom 6",
      client_name: "Darin Vickie",
      slug: "bathroom-6",
      image: "https://i.ibb.co/qxwY0B5/31-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1580229080435-1c7e2ce835c1?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[3]],
      tags: [Tags[13], Tags[14]],
      title: "Living Area 6",
      client_name: "Aline Wil",
      slug: "living-area-6",
      image: "https://i.ibb.co/Jn9wsRy/32-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1631889992800-3bc2a3993f2a?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image:
        "https://images.unsplash.com/photo-1581404635299-f473ede8699a?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[0]],
      tags: [Tags[5], Tags[7]],
      title: "Kitchen 7",
      client_name: "Koda Dwight",
      slug: "kitchen-7",
      image: "https://i.ibb.co/7Y1N5dg/33-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1597742439545-1d6eaf54a470?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[1]],
      tags: [Tags[0], Tags[3]],
      title: "Bedroom 7",
      client_name: "Tamsin Kaolin",
      slug: "bedroom-7",
      image: "https://i.ibb.co/XJMWJJ2/34-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[2]],
      tags: [Tags[1], Tags[4]],
      title: "Bathroom 7",
      client_name: "Mary Beth Rosalynne",
      slug: "bathroom-7",
      image: "https://i.ibb.co/HYGx3zK/35-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image:
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[3]],
      tags: [Tags[13], Tags[14]],
      title: "Living Area 7",
      client_name: "Ayden Gabriella",
      slug: "Living-area-7",
      image: "https://i.ibb.co/gZBNGLg/36-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1571992579655-8134e2b8df0b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[0]],
      tags: [Tags[5], Tags[7]],
      title: "Kitchen 8",
      client_name: "Jacquelyn Anabella",
      slug: "kitchen-8",
      image: "https://i.ibb.co/hBs0ZXq/37-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1556594472-e9b933db923c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[1]],
      tags: [Tags[0], Tags[3]],
      title: "Bedroom 8",
      client_name: "Quinlan Merrick",
      slug: "bedroom-8",
      image: "https://i.ibb.co/XYYz6ry/38-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[2]],
      tags: [Tags[1], Tags[4]],
      title: "Bathroom 8",
      client_name: "Tranter Mae",
      slug: "bathroom-8",
      image: "https://i.ibb.co/Z2WQX6y/39-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1595514535116-d0401260e7cf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image: null,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
    {
      categories: [ProjectCategories[3]],
      tags: [Tags[13], Tags[14]],
      title: "Living Area 8",
      client_name: "Quinlan Cannon",
      slug: "living-area-8",
      image: "https://i.ibb.co/0M31X1H/40-min.jpg",
      image_large:
        "https://images.unsplash.com/photo-1614628079765-6c164f4bd970?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      head_image:
        "https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p><br /><p>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>",
      pinned: false,
    },
  ];

  for (const project of projects) {
    await prisma.projects.create({
      data: {
        ...project,
        categories: {
          connect: project.categories.map((category) => ({
            title: category.title,
            slug: category.slug,
          })),
        },
        tags: {
          connect: project.tags.map((tag) => ({
            title: tag.title,
            slug: tag.slug,
          })),
        },
      },
    });
  }

  const blogCategories = [
    {
      title: "Kitchen Design",
      slug: "kitchen-design",
    },
    {
      title: "Living Room Design",
      slug: "living-room-design",
    },
    {
      title: "Interior Design",
      slug: "interior-design",
    },
    {
      title: "Decoration",
      slug: "decoration",
    },
    {
      title: "Doors & Windows",
      slug: "doors-windows",
    },
    {
      title: "Home Land",
      slug: "home-land",
    },
    {
      title: "Roof Installation",
      slug: "roof-installation",
    },
  ];

  for (const category of blogCategories) {
    await prisma.blogCategories.create({
      data: category,
    });
  }

  const blogs = [
    {
      categories: [blogCategories[0]],
      tags: [Tags[5], Tags[7]],
      title: "Kitchen Design 1",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/kXsGrKc/kitchen-1.jpg",
      head_image: "https://i.ibb.co/W0QBcR2/head-1.jpg",
      slug: "kitchen-design-1",
    },
    {
      categories: [blogCategories[1]],
      tags: [Tags[0], Tags[3]],
      title: "Living Design 1",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/nMcG3xb/living-1.jpg",
      head_image: "https://i.ibb.co/dB6L2Mv/head-2.jpg",
      slug: "living-design-1",
    },
    {
      categories: [blogCategories[2]],
      tags: [Tags[1], Tags[4]],
      title: "Interior Design 1",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/brphJ3k/interior-3.jpg",
      head_image: "https://i.ibb.co/Lpm9XgG/head-3.jpg",
      slug: "interior-design-1",
    },
    {
      categories: [blogCategories[3]],
      tags: [Tags[13], Tags[14]],
      title: "Decoration 1",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/mSRshCj/decoration-1.jpg",
      head_image: null,
      slug: "decoration-1",
    },
    {
      categories: [blogCategories[4]],
      tags: [Tags[5], Tags[7]],
      title: "Door & Windows 1",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/SNQcjXx/door-windows-1.jpg",
      head_image: null,
      slug: "door-windows-1",
    },
    {
      categories: [blogCategories[5]],
      tags: [Tags[0], Tags[3]],
      title: "Home Land 1",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/j6QWSCf/home-land-1.jpg",
      head_image: null,
      slug: "home-land-1",
    },
    {
      categories: [blogCategories[6]],
      tags: [Tags[1], Tags[4]],
      title: "Roof Installation 1",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/0C7Wn4Q/roof-1.jpg",
      head_image: null,
      slug: "roof-installation-1",
    },
    {
      categories: [blogCategories[0]],
      tags: [Tags[5], Tags[7]],
      title: "Kitchen Design 2",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/7YLQpdr/kitchen-2.jpg",
      head_image: null,
      slug: "kitchen-design-2",
    },
    {
      categories: [blogCategories[1]],
      tags: [Tags[0], Tags[3]],
      title: "Living Design 2",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/30k4nPL/living-2.jpg",
      head_image: null,
      slug: "living-design-2",
    },
    {
      categories: [blogCategories[2]],
      tags: [Tags[1], Tags[4]],
      title: "Interior Design 2",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/mXcmp4F/interior-2.jpg",
      head_image: null,
      slug: "interior-design-2",
    },
    {
      categories: [blogCategories[3]],
      tags: [Tags[13], Tags[14]],
      title: "Decoration 2",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/cYhN4s0/decoration-2.jpg",
      head_image: null,
      slug: "decoration-2",
    },
    {
      categories: [blogCategories[4]],
      tags: [Tags[5], Tags[7]],
      title: "Door & Windows 2",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/NxsRdSP/door-windows-2.jpg",
      head_image: null,
      slug: "door-windows-2",
    },
    {
      categories: [blogCategories[5]],
      tags: [Tags[0], Tags[3]],
      title: "Home Land 2",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/vXbDV2g/home-land-2.jpg",
      head_image: null,
      slug: "home-land-2",
    },
    {
      categories: [blogCategories[6]],
      tags: [Tags[1], Tags[4]],
      title: "Roof Installation 2",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/m9F1FyG/roof-2.jpg",
      head_image: null,
      slug: "roof-installation-2",
    },
    {
      categories: [blogCategories[0]],
      tags: [Tags[5], Tags[7]],
      title: "Kitchen Design 3",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/sbk3Mtx/kitchen-3.jpg",
      head_image: null,
      slug: "kitchen-design-3",
    },
    {
      categories: [blogCategories[1]],
      tags: [Tags[0], Tags[3]],
      title: "Living Design 3",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/PxzzThs/living-3.jpg",
      head_image: null,
      slug: "living-design-3",
    },
    {
      categories: [blogCategories[2]],
      tags: [Tags[1], Tags[4]],
      title: "Interior Design 3",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/brphJ3k/interior-3.jpg",
      head_image: null,
      slug: "interior-design-3",
    },
    {
      categories: [blogCategories[3]],
      tags: [Tags[13], Tags[14]],
      title: "Decoration 3",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/brphJ3k/interior-3.jpg",
      head_image: null,
      slug: "decoration-3",
    },
    {
      categories: [blogCategories[4]],
      tags: [Tags[5], Tags[7]],
      title: "Door & Windows 3",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/pJ8B6NW/door-windows-3.jpg",
      head_image: null,
      slug: "door-windows-3",
    },
    {
      categories: [blogCategories[5]],
      tags: [Tags[0], Tags[3]],
      title: "Home Land 3",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/sWNHfB3/home-land-3.jpg",
      head_image: null,
      slug: "home-land-3",
    },
    {
      categories: [blogCategories[6]],
      tags: [Tags[1], Tags[4]],
      title: "Roof Installation 3",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/7QhcSkk/roof-3.jpg",
      head_image: null,
      slug: "roof-installation-3",
    },
    {
      categories: [blogCategories[0]],
      tags: [Tags[5], Tags[7]],
      title: "Kitchen Design 4",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/SNG93WW/kitchen-4.jpg",
      head_image: null,
      slug: "kitchen-design-4",
    },
    {
      categories: [blogCategories[1]],
      tags: [Tags[0], Tags[3]],
      title: "Living Design 4",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/HNVLH24/living-4.jpg",
      head_image: null,
      slug: "living-design-4",
    },
    {
      categories: [blogCategories[2]],
      tags: [Tags[1], Tags[4]],
      title: "Interior Design 4",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/cw1xCCb/interior-4.jpg",
      head_image: null,
      slug: "interior-design-4",
    },
    {
      categories: [blogCategories[3]],
      tags: [Tags[13], Tags[14]],
      title: "Decoration 4",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/M52CCzT/decoration-4.jpg",
      head_image: null,
      slug: "decoration-4",
    },
    {
      categories: [blogCategories[4]],
      tags: [Tags[5], Tags[7]],
      title: "Door & Windows 4",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/sK7Zj1F/door-windows-4.jpg",
      head_image: null,
      slug: "door-windows-4",
    },
    {
      categories: [blogCategories[5]],
      tags: [Tags[0], Tags[3]],
      title: "Home Land 4",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/FsVshxj/home-land-4.jpg",
      head_image: null,
      slug: "home-land-4",
    },
    {
      categories: [blogCategories[6]],
      tags: [Tags[1], Tags[4]],
      title: "Roof Installation 4",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/GMYrgj1/roof-4.jpg",
      head_image: null,
      slug: "roof-installation-4",
    },
    {
      categories: [blogCategories[0]],
      tags: [Tags[5], Tags[7]],
      title: "Kitchen Design 5",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/yYHBfD5/kitchen-5.jpg",
      head_image: null,
      slug: "kitchen-design-5",
    },
    {
      categories: [blogCategories[1]],
      tags: [Tags[0], Tags[3]],
      title: "Living Design 5",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/D9mQy8C/living-5.jpg",
      head_image: null,
      slug: "living-design-5",
    },
    {
      categories: [blogCategories[2]],
      tags: [Tags[1], Tags[4]],
      title: "Interior Design 5",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/9wNyhwW/interior-5.jpg",
      head_image: null,
      slug: "interior-design-5",
    },
    {
      categories: [blogCategories[3]],
      tags: [Tags[13], Tags[14]],
      title: "Decoration 5",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/7GY7JtY/decoration-5.jpg",
      head_image: null,
      slug: "decoration-5",
    },
    {
      categories: [blogCategories[4]],
      tags: [Tags[5], Tags[7]],
      title: "Door & Windows 5",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/0YmMVqZ/door-windows-5.jpg",
      head_image: null,
      slug: "door-windows-5",
    },
    {
      categories: [blogCategories[5]],
      tags: [Tags[0], Tags[3]],
      title: "Home Land 5",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/JcXPk6N/home-land-5.jpg",
      head_image: null,
      slug: "home-land-5",
    },
    {
      categories: [blogCategories[6]],
      tags: [Tags[1], Tags[4]],
      title: "Roof Installation 5",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/PMb3jc3/roof-5.jpg",
      head_image: null,
      slug: "roof-installation-5",
    },
    {
      categories: [blogCategories[0]],
      tags: [Tags[5], Tags[7]],
      title: "Kitchen Design 6",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/PzpwYgk/kitchen-6.jpg",
      head_image: null,
      slug: "kitchen-design-6",
    },
    {
      categories: [blogCategories[1]],
      tags: [Tags[0], Tags[3]],
      title: "Living Design 6",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/3YvK6BH/living-6.jpg",
      head_image: null,
      slug: "living-design-6",
    },
    {
      categories: [blogCategories[2]],
      tags: [Tags[1], Tags[4]],
      title: "Interior Design 6",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/ysRXdwX/interior-6.jpg",
      head_image: null,
      slug: "interior-design-6",
    },
    {
      categories: [blogCategories[3]],
      tags: [Tags[13], Tags[14]],
      title: "Decoration 6",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/H7KCykW/decoration-6.jpg",
      head_image: null,
      slug: "decoration-6",
    },
    {
      categories: [blogCategories[4]],
      tags: [Tags[5], Tags[7]],
      title: "Door & Windows 6",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/VWGxRK3/door-windows-6.jpg",
      head_image: null,
      slug: "door-windows-6",
    },
    {
      categories: [blogCategories[5]],
      tags: [Tags[0], Tags[3]],
      title: "Home Land 6",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/yFBx9YJ/home-land-6.jpg",
      head_image: null,
      slug: "home-land-6",
    },
    {
      categories: [blogCategories[6]],
      tags: [Tags[1], Tags[4]],
      title: "Roof Installation 6",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/SXHS2Vk/roof-6.jpg",
      head_image: null,
      slug: "roof-installation-6",
    },
    {
      categories: [blogCategories[0]],
      tags: [Tags[5], Tags[7]],
      title: "Kitchen Design 7",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/ZJc9WQs/kitchen-7.jpg",
      head_image: null,
      slug: "kitchen-design-7",
    },
    {
      categories: [blogCategories[1]],
      tags: [Tags[0], Tags[3]],
      title: "Living Design 7",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/2dRLbY6/living-7.jpg",
      head_image: null,
      slug: "living-design-7",
    },
    {
      categories: [blogCategories[2]],
      tags: [Tags[1], Tags[4]],
      title: "Interior Design 7",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/4VRJSLg/interior-7.jpg",
      head_image: null,
      slug: "interior-design-7",
    },
    {
      categories: [blogCategories[3]],
      tags: [Tags[13], Tags[14]],
      title: "Decoration 7",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/7tN9sNZ/decoration-7.jpg",
      head_image: null,
      slug: "decoration-7",
    },
    {
      categories: [blogCategories[4]],
      tags: [Tags[5], Tags[7]],
      title: "Door & Windows 7",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/8Np7BBv/door-windows-7.jpg",
      head_image: null,
      slug: "door-windows-7",
    },
    {
      categories: [blogCategories[5]],
      tags: [Tags[0], Tags[3]],
      title: "Home Land 7",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/0QYKk0n/home-land-7.jpg",
      head_image: null,
      slug: "home-land-7",
    },
    {
      categories: [blogCategories[6]],
      tags: [Tags[1], Tags[4]],
      title: "Roof Installation 7",
      content:
        "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><br/><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><blockquote>The details are not the details. They make the design.</blockquote><h3>Design sprints are great</h3><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><br/><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><br/><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Content Image' /><br/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
      image: "https://i.ibb.co/yP0nRcH/roof-7.jpg",
      head_image: null,
      slug: "roof-installation-7",
    },
  ];

  for (const blog of blogs) {
    await prisma.blogs.create({
      data: {
        ...blog,
        categories: {
          connect: blog.categories.map((category) => ({
            title: category.title,
            slug: category.slug,
          })),
        },
        tags: {
          connect: blog.tags.map((tag) => ({
            title: tag.title,
            slug: tag.slug,
          })),
        },
      },
    });
  }

  const statistics = [
    {
      title: "Years of Experience",
      value: 12,
    },
    {
      title: "Success Projects",
      value: 85,
    },
    {
      title: "Active Projects",
      value: 15,
    },
    {
      title: "Satisfied Clients",
      value: 95,
    },
  ];

  for (const statistic of statistics) {
    await prisma.statistics.create({
      data: statistic,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
