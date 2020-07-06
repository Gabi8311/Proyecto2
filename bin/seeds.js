const mongoose = require("mongoose")
const Movie = require('../models/movies.model')
const Comic = require('../models/comics.model')
const Phrase = require('../models/phrases.model')
const Event = require('../models/event.model')


const dbTitle = 'IronData'
mongoose.connect(`mongodb://localhost/${dbTitle}`, { useUnifiedTopology: true, useNewUrlParser: true })

Movie.collection.drop()
Comic.collection.drop()
Phrase.collection.drop()
Event.collection.drop()

const comics = [

        {
            title: 'Iron Man: Hipervelocidad',
            coverImg: '../images/iron-man-hipervelocidad.jpg',
        description: 'Iron Man debe hacer frente a una serie de ataques perpetrados por una organización que utiliza la tecnología más vanguardista de la actualidad: Misiles balísticos, yihadistas supersónicos, avatares virales seductores y robots adictos a las drogas cibernéticas, lo que le empujará a su límite tecnológico y humano. Además, Tony ha creado la armadura definitiva, una nueva versión única y mejorada. El autor Adam Warren se encarga del guión y del dibujo, en un estilo detallista y con cierto aire manga.',
            year: 2007
        },
        {

            title: 'Largo camino hacia abajo y el futuro',
            coverImg: '../images/iron-man-matt-fraction-larroca.jpg',
            description: '¡Tony Stark es prisionero de la Ciudad del Mandarín! ¿Pueden unirse Rescate, Iron Man 2.0 y Máquina de Guerra, y no matarse entre ellos, mientras que Tony Stark... construye el arma definitiva del Mandarín? ¿Cuál es la sorprendente verdad detrás de la misión del Mandarín? ¿Cómo pueden nuestros héroes detener los planes del Mandarín? ¿Y qué invento está haciendo Zeke Stane? El verdadero villano se revela cuando Shang-Chi, Maestro de Kung Fu, descubre una amenaza monstruosa para la humanidad. ¡Tony contra Stane contra el Mandarín son las apuestas definitivas, mientras que Rescate y Iron Man 2.0. se enfrentan a Hammer! ¿Quién gana y quién pierde? ¿Quién vive y quién muere? ',
            year: 2012
        },
        {

            title: 'Cazador de las estrellas',
            coverImg: '../images/Cazador-estrellas.jpg',
            description: 'Esta historia de tan sólo un capítulo es muy interesante, explora  otra faceta del personaje y expande el alcance de su poder y habilidad. Eso ocurre porque es enviado al espacio, a resolver un misterio relacionado con unas intrigantes y horribles muertes y desapariciones de astronautas de la NASA. Pero, lo que encontrará ahí arriba será lo que menos puede esperarse…',
            year: 1988
        },
        {

            title: 'Civil War: La confesión',
            coverImg: '../images/civil-war-la-confesion.jpg',
            description: 'Justo al finalizar , con las fatídicas consecuencias que ello conlleva, Iron Man, director de SHIELD tras la desaparición de Nick Furia, hace una confesión a un amigo que jamás podríamos haber imaginado. Las consecuencias fueron dramáticas y el futuro se torna oscuro... y esta dramática historia corta es el primer paso hacia el nuevo camino al infierno del universo Marvel. El tandem formado por ',
        year: 2007
    },
        {

            title: 'Ultimate Iron Man ',
            coverImg: '../images/ultimate-iron-man.jpg',
            description: 'El origen de Iron Man como nunca se había visto anteriormente . En el universo Ultimate tuvieron como objetivo modernizar a todos los héroes y villanos de la editorial, con historias que rezumaran la mejor ciencia ficción posible, y para el origen del Ultimate Iron Man contrataron como guionista a Orson Scott Card, autor de El juego de Ender, que revisitó al personaje de una forma jamás planteada anteriormente, con los fabulosos dibujos de Andy Kubert . Uno de los repasos más originales del mito de Iron Man.',
        year: 2006
    },
        {

            title: 'Iron Man: La edad del hierro',
            coverImg: '../images/iron-man-iron-age.jpg',
            description: 'Kurt Busiek  es uno de los mejores guionistas del cómic norteamericano. Ha realizado obras maestras de todo tipo, casi siempre en el plano superheroico, realizando etapas fascinantes en Vengadores, Iron Man, Thunderbolts, Marvels, etc. En La edad de hierro, nos relata una historia de dos partes en la que el mito del Vengador Dorado es analizado desde dos puntos de vista. Primero, a través de la perspectiva de Pepper Potts, que nos cuenta el origen de Tony Stark a través de su ascenso como CEO de Stark Industries y su primera vez como Iron Man. Después, le llega el turno a Happy Hogan, que relata un momento en que Tony Stark tomó una agenda secreta contra Stark Industries siendo Iron Man.',
        year: 1998
    },
        {

            title: 'Iron Man: La llegada del mandarín',
            coverImg: '../images/iron-man-enter-mandarin.jpg',
            description: '¡Descubre exactamente cómo se convirtió El Mandarín en el enemigo más temible de Iron Man! Se trata de una historia que se sitúa en los primeros días del Universo Marvel, con una saga que contiene secretos nunca antes revelados sobre el primer encuentro entre Tony Stark/Iron Man y el terrorista global conocido solo como El Mandarín! ¿Qué pasó realmente durante ese primer encuentro? Y, a pesar de haber leído los cómics originales de aquel primer encuentro, en esta historia se relata mucho más del enfrentamiento entre estos dos personajes, introduciéndose de lleno en el trasfondo paranoico del Mandarían y del mito del mismo. Una joya, escrita por Joe Casey y dibujada por un resolutivo Eric Canete, con colores de Dave Stewart.',
        year: 2008
    },
        {
            title: 'Doomquest',
            coverImg: '../images/iron-man-doomquest.jpg',
            description: 'David Michelinie ( junto a Bob Layton) ) cambió muchos conceptos de Iron Man, modernizando su galería de villanos, entre otras cosas. Así, consiguió enfrentar a Iron Man contra el Doctor Doom: Tony Stark se entera de que un empleado suyo realizó ventas ilegales de su tecnología al Doctor Doom, de Latveria. Después de despedir inmediatamente al empleado, Stark cancela la venta e intenta que le devuelvan el pago, pero el Doctor Doom no solo rechaza el reembolso, sino que envía agentes para confiscar los bienes rechazados por Stark. Iron Man no puede evitar el robo y viaja al país del Doctor Doom, Latveria, para recuperar los bienes personalmente.',
            year: 1981
        },
        {

            title: 'Desde las cenizas ( crash & burn)',
            coverImg: '../images/iron-man-crash-burn.jpg',
            description: 'La empresa de Tony Stark, Industrias Stark ha sido falsa e intencionadamente implicada en un escándalo que está comenzando a pasarle factura, por lo que Iron Man tiene que demostrar la inocencia de su compañía mientras se enfrenta a una variedad de desafíos por parte de fuerzas externas que investigan la situación (personas como Venom, Capitán América, los Nuevos Guerreros, Thunderstrike y Hulk). La situación da pie a una historia repleta de acción que fue influencia directa para la serie animada de aquellos años. El equipo creativo que se encarga del proyecto lo forman Len Kaminski y Kevin Hopgood, los cocreadores de Máquina de Guerra.',
            year: 1994
        },
        {

            title: 'La saga de Iron Monger',
            coverImg: '../images/iron-man-saga-iron-monger.jpg',
            description: 'Denny ONeil confabuló una historia de pérdida para Tony, arrebatándole dos de sus pilares: su armadura y su fortuna, ¡pero no su valor! Tony Stark está de pie después de todo lo que Obadiah Stane le ha hecho, pero ahora el multimillonario enemigo de Stark se está llevando a los amigos de Stark... ¡uno de ellos para siempre! Esta saga fue construyéndose poco a poco, para finalmente acabar en un clímax bestial con el enfrentamiento entre los dos pesos pesados. Mientras tanto, James Rhodes, otrora amigo de Stark, utiliza la armadura titular de Iron Man... mientras el propio Tony utiliza un modelo antiguo para seguir con diversas misiones... ¡Pura acción ochentera!',
            year: 1985
        },
        {

            title: 'Armor Wars',
            coverImg: '../images/iron-man-armor-wars.jpg',
            description: '¡Iron Man declara la guerra! ¡Los delincuentes están usando la tecnología de Tony Stark para propósitos malvados, y Tony Stark ya no lo piensa tolerar más! Estamos ante una de las tramas más conocidas y leídas de Iron Man, siendo escrita por el aclamado equipo creativo formado por David Michelinie (Venom) y Bob Layton (X-O Manowar), conocidos también por el importantísimo arco argumental Demonio en una botella. Muchísimos personajes pasarán por las páginas de Iron Man durante esta saga, como el Capitán, Ant-Man, Stingray... ¡y varias sorpresas mayúsculas! Por otro lado, algunos de los villanos perpetrados con resquicios de armaduras de Iron Man o la tecnología de Stark, resultan espectaculares.',
            year: 1988
        },
        {

            title: 'Soluciones mortales (“Heroes return”)',
            coverImg: '../images/iron-man-heroes-return.jpg',
            description: 'En el año 1996, los personajes más grandes de Marvel: Vengadores, Cuatro Fantásticos, Hulk y Iron Man, fallecieron aparentemente a manos de Onslaught, y en Marvel crearon una nueva línea, los Heroes Reborn, con historias de sus personajes desde el comienzo. Y después de un año de estos Heroes Reborn, en 1998, lo personajes volvieron a la vida en el universo regular, dejándolos con muchos asuntos que resolver. En el caso de Tony Stark, está reconstruyendo su corporación desde cero, ¡pero los enemigos viejos y otros tantos nuevos le recuerdan que su trabajo nunca ha terminado!  Con romance, rivalidad y robots para mantenerlo ocupado, ¿podrá Iron Man ayudar a su compañero de equipo de los Vengadores, Warbird, en su combate contra el peor enemigo de Stark ... el que está en una botella? Y, mientras tanto, viejos conocidos como la Viuda Negra o Máquina de Guerra visitan esta nueva etapa escrita por el aclamado Kurt Busiek',
            year: 1998
        },
        {

            title: 'El hombre de la máscara de hierro',
            coverImg: '../images/iron-man-mascara-hierro.jpg',
            description: 'Tony Stark ha creado su armadura más avanzada hasta el momento, con una con inteligencia artificial que hace que el traje se mueva solo, luche solo y tome decisiones por sí mismo. Y parece que este nuevo Iron Man no tiene ninguna de las debilidades de Tony Stark, excepto cuando aparece Rumiko Fujikawa, la mujer que Tony ama. El problema es que la nueva armadura también la ama. Es entonces cuando prepara un plan para que apoderarse de la vida de Tony y convertise en él para siempre: ¡Iron Man debe matar a Tony Stark! Y si no fuera suficiente, Tony descubre a los Hijos de Yinsen tecnológicamente avanzados, adoradores del hombre que ayudó a inventar su armadura. Pero cuando descubre que su primer enemigo, Wong Chu, aún vive, ¡Iron Man debe unirse a los Hijos para destruir el imperio de Wong Chu! Ideado por Joe Quesada y Frank Tieri, estamos ante una de las tramas más divertidas, intrigantes e inteligentemente construidas para adentrarse en el mito del Hombre de Hierro como jamás habíamos visto. Aunque Quesada era, sobre todo, dibujante, en este caso escribió parte del guión y del argumento, además de haberse ocupado de las impresionantes portadas de cada uno de los capítulos de la saga.',
            year: 2000
    },
        {

            title: 'Iron Man: Máquina de guerra',
            coverImg: '../images/iron-man-maquina-de-guerra.jpg',
            description: 'James Rhodes comenzó como piloto y ayudante de Tony Stark y su empresa, e incluso le sustituyó durante un tiempo como Iron Man cuando había desaparecido... pero nadie podría haber esperado el cambio de rumbo de este personaje, que se labró su propio destino a partir del arco argumental War Machine. Tony Stark parece haber muerto de nuevo...  Es entonces cuando Jim Rhodes se pone la nueva armadura de Máquina de Guerra y le muestra al mundo lo que es blanco y negro, sin rodeos y con una violencia y fiereza que no se había visto anteriormente en ningún hombre de hierro…',
            year: 1993
        },
        {

            title: 'The Ultimates',
            coverImg: '../images/the-ultimates.jpg',
            description: 'El universo Ultimate fue creado para reformular los orígenes de los personajes clásicos de Marvel para un público nuevo, y uno de los títulos que más triunfó fue The Ultimates, de Mark Millar. The Ultimates son los Vengadores de este universo y la encarnación de Iron Man no podría haber sido más acertada. Todo en él rezuma modernidad y una concepción fresca dentro del siglo XXI y sería la principal influencia del director Joss Wheddon y Robert Downey Jr. para dar forma a Iron Man en el cine. Después de un primer volumen fascinante, el segundo, titulado The Ultimates 2, ahonda aún más en el carácter de Tony Stark.',
            year: 2004
        },
        {

            title: 'El más buscado del mundo',
            coverImg: '../images/iron-man-mas-buscado.jpg',
            description: 'El evento Invasión Secreta ha dejado a Tony Stark en evidencia. Algo salió muy mal para el director de SHIELD (que en esos momentos era el propio Iron Man), que parecía que huía en pleno ataque Skrull, algo de lo que se aprovechó Norman Osborn, responsable de los Thunderbolts, y es por eso mismo que se ha puesto en orden de captura. Ahora, Tony va a perder todo su prestigio y se convertirá en un fugitivo temporalmente... ¿cómo podrá sobrevivir? La etapa de Matt Fraction dejó muchos arcos argumentales fabulosos, y siempre planteaba su historia de manera cinematográfica y adulta, con los fascinantes dibujos hiperrealistas de Salvador Larroca.',
            year: 2009
        },
        {

            title: 'Demonio en una botella',
            coverImg: '../images/iron-man-demonio-botella.jpg',
            description: 'Pocos lectores aficionados de Marvel sabían que el alcoholismo de Tony Stark no acompañaba al personaje desde su inicio. En 1963, cuando fue creado por Stan Lee, Larry Lieber, Don Heck y Jack Kirby, se concibió a Tony Stark como un playboy mujeriego, pero no como una persona adicta al alcohol. Pero llegarían David Michelinie (cocreador de Venom y Carnage) y Bob Layton (cocreador de X-O Manowar) a finales de los años 70 para añadir este punto dentro de la personalidad de Tony, algo que acabaría definiéndolo muchos años después. Demonio en la botella es uno de los clásicos de Iron Man y de Marvel, una trama repleta de acción, naves, villanos, con la participación de SHIELD... ¡y sobre todo con el alcoholismo rampante de Tony!',
            year: 1979
        },
        {

            title: 'Las cinco pesadillas de Tony Stark',
            coverImg: '../images/cinco-pesadillas-iron-man.jpg',
            description: 'Tony Stark, Iron Man, industrial multimillonario y director de SHIELD, se enfrenta al desafío más abrumador de su vida. Ezekiel Stane, hijo del difunto rival comercial y archienemigo de Stark, Obadiah Stone (quien fuera Iron Monger), ha puesto su mira, su genio y su considerable fortuna en la tarea de destruir a Tony Stark y Iron Man. Y puede que lo consiga, ya que su vida no para de tener problemas. Esta serie fue realizada justo después de que se estrenara la película Iron Man y significó uno de los relanzamientos más apasionantes de Marvel durante la primera década del siglo XXI, y la crítica especializada la alabó tanto como las enormes superventas que tuvo. Además, fue galardonada con el Premio Eisner a Mejor serie nueva en 2009',
        year: 2009
    },
        {

            title: 'Iron Man: Director de S.H.I.E.L.D.',
            coverImg: '../images/iron-man-director-shield.jpg',
            description: 'Después de los acontecimientos ocurridos en el evento Civil War, el estatus de Iron Man ha mejorado sustancialmente, y el Presidente de los Estados Unidos lo ha nombrado nuevo director de SHIELD, debido, además, a la desaparición de Nick Furia. Se trata de un papel totalmente nuevo que no estará exento de problemas. Sus enemigos están al acecho... sobre todo un viejo conocido. Nada es lo que parece y en su nuevo puesto, Tony descubrirá los gajes de la profesión de ser director de una de las organizaciones más complejas del mundo.',
            year:2009
        },
        {

            title: 'Extremis',
            coverImg: '../images/mejores-comics-iron-man-extremis.jpg',
            description: 'La historia Extremis es relativamente corta, con tan sólo seis capítulos, pero supuso una auténtica revolución en la forma de entender la armadura de Iron Man, puesto que Warren Elis, aclamado guionista de obras maestras de ciencia ficción como Planetary, Transmetropolitan o The Authority, dio con una nueva concepción de la misma, de forma simbiótica, líquida, teniendo en cuenta una relación armadura-huesped diferente a lo visto anteriormente. La trama plantea un dilema más que interesante: Una tecnología conocida como Extremis amenaza con esclavizar a la humanidad. ¿Qué es y quién la ha desatado sobre el planeta?',
            year: 2006
        }
]
    
const movies =[
{   title:'Iron man',coverImg:'../images/Iron_Man_1_Portada.png',description:'El multimillonario fabricante de armas Tony Stark (Robert Downey Jr.) debe enfrentarse a su turbio pasado después de sufrir un accidente con una de sus armas. Equipado con una armadura de última generación tecnológica, se convierte en "El hombre de hierro", un héroe que se dedica a combatir el mal en todo el mundo. ',actors:['Robert Downey Jr','Terrence Howard','Jeff Bridges','Shaun Toub','Gwyneth Paltrow','Leslie Bibb', 'Faran Tahir','Clark Gregg','Bill Smitrovich','Sayed Badreya' ,'Paul Bettany', 'Jon Favreau', 'Peter Billingsley', 'Tim Guinee', 'Eileen Weisinger', 'Gerard Sanders', 'Samuel L. Jackson', 'Stan Lee'], year: 2008},
    
    {title:'Iron Man 2',coverImg:'../images/ironMan2-portada.jpg',description:'El mundo ya sabe que el multimillonario Tony Stark (Robert Downey Jr.) es Iron Man, el superhéroe enmascarado. A pesar de las presiones del gobierno, la prensa y la opinión pública para que comparta su tecnología con el ejército, Tony es reacio a desvelar los secretos de la armadura de Iron Man, porque teme que esa información caiga en en manos de irresponsables. Con Pepper Potts (Gwyneth Paltrow) y James “Rhodey” Rhodes (Don Cheadle) a su lado, Tony forja alianzas nuevas y se enfrenta a nuevas y poderosas fuerzas.',actors:['Robert Downey Jr.', 'Mickey Rourke', 'Gwyneth Paltrow', 'Don Cheadle', 'Sam Rockwell', 'Scarlett Johansson', 'Samuel L. Jackson', 'Paul Bettany', 'Jon Favreau', 'Clark Gregg', 'Leslie Bibb', 'John Slattery', 'Garry Shandling', 'Kate Mara', 'Christiane Amanpour', 'Philippe Bergeron', 'James Bethea', 'Michael Bruno', 'Kate Clark', 'DJ AM', 'Tim Guinee', 'Eric L. Haney', 'Yevgeni Lazarev', 'Jean-François Duhamel', 'Stan Lee', 'Helena Mattsson', 'Anya Monzikova', 'Olivia Munn', 'Elon Musk', 'Bill O’Reilly', 'Alejandro Patino', 'Karim Saleh', 'Brian Schaeffer', 'Phillipe Simon', 'Krystal Ellsworth', 'Jennifer D. Johnson', 'Rachele Brooke Smith', 'Nadine Ellis'], year: 2010},
    
    {title:'Iron Man 3',coverImg:'../images/IronMan3-Portada.jpg',description:'El descarado y brillante empresario Tony Stark/Iron Man se enfrentará a un enemigo cuyo poder no conoce límites. Cuando Stark comprende que su enemigo ha destruido su universo personal, se embarca en una angustiosa búsqueda para encontrar a los responsables. Este viaje pondrá a prueba su entereza una y otra vez. Acorralado, Stark tendrá que sobrevivir por sus propios medios, confiando en su ingenio y su instinto para proteger a las personas que quiere.',actors:['Robert Downey Jr.', 'Ben Kingsley', 'Gwyneth Paltrow', 'Don Cheadle', 'Guy Pearce', 'Rebecca Hall', 'James Badge Dale', 'Stephanie Szostak', 'Ty Simpkins', 'Wang Xueqi', 'Jon Favreau', 'William Sadler', 'Miguel Ferrer', 'Fan Bingbing', 'Yvonne Zima', 'Dale Dickey', 'Ashley Hamilton', 'Stan Lee'], year: 2013},

    {title:'The Avengers',coverImg:'../images/The_Avengers_Portada.png',description:'Cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial, Nick Fury, director de la Agencia SHIELD, decide reclutar a un equipo para salvar al mundo de un desastre casi seguro. Adaptación del cómic de Marvel "Los Vengadores", el legendario grupo de superhéroes formado por Ironman, Hulk, Thor y el Capitán América entre otros.',actors:['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth', 'Jeremy Renner', 'Scarlett Johansson', 'Tom Hiddleston', 'Samuel L. Jackson', 'Cobie Smulders', 'Clark Gregg', 'Gwyneth Paltrow', 'Stellan Skarsgard', 'Paul Bettany', 'Maximiliano Hernández', 'Alexis Denisof', 'Jerzy Skolimowski', 'Tina Benko', 'Powers Boothe', 'Harry Dean Stanton', 'Stan Lee', 'Jeff Wolfe', 'Jenny Agutter', 'Arthur Darbinyan', 'Donald Li', 'Warren Kole', 'Alicia Sixtos', 'Jesse Garcia', 'Dieter Riesle', 'Kenneth Tigar', 'Walter Perez', 'Josh Cowdery', 'Ashley Johnson', 'Robert Clohessy', 'Enver Gjokaj', 'Robin Swoboda', 'Jamie McShane', 'Michael Zhang', 'Romy Rosemont', 'James Eckhouse', 'Pat Kiernan', 'Thomas Roberts', 'Damion Poitier'], year: 2013},

    {title:'The Avengers:Age of Ultron',coverImg:'../images/avengers-Ultron-Portada.jpg',description:'Cuando Tony Stark intenta reactivar un programa caído en desuso cuyo objetivo es mantener la paz, las cosas empiezan a torcerse y los héroes más poderosos de la Tierra, incluyendo a Iron Man, Capitán América, Thor, El Increíble Hulk, Viuda Negra y Ojo de Halcón, tendrán que afrontar la prueba definitiva cuando el destino del planeta se ponga en juego. Cuando el villano Ultrón emerge, le corresponderá a Los Vengadores detener sus terribles planes, que junto a incómodas alianzas llevarán a una inesperada acción que allanará el camino para una épica y única aventura.',actors:['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth', 'Scarlett Johansson', 'Jeremy Renner', 'Mark Ruffalo', 'James Spader', 'Elizabeth Olsen', 'Aaron Taylor-Johnson', 'Paul Bettany', 'Samuel L. Jackson', 'Cobie Smulders', 'Linda Cardellini', 'Claudia Kim', 'Don Cheadle', 'Andy Serkis', 'Thomas Kretschmann', 'Stellan Skarsgard', 'Anthony Mackie', 'Julie Delpy', 'Idris Elba', 'Hayley Atwell', 'Stan Lee'], year: 2015},

    {title:'Avengers: Infinity War',coverImg:'../images/Vengadores_Infinity_War-Portada.jpg',description:'El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos?',actors:['Robert Downey Jr.', 'Chris Hemsworth', 'Benedict Cumberbatch', 'Chris Evans', 'Mark Ruffalo', 'Scarlett Johansson', 'Chris Pratt', 'Tom Holland', 'Josh Brolin', 'Elizabeth Olsen', 'Chadwick Boseman', 'Pom Klementieff', 'Terry Notary', 'Dave Bautista', 'Karen Gillan', 'Zoe Saldana', 'Gwyneth Paltrow', 'Tom Hiddleston', 'Cobie Smulders', 'Paul Bettany', 'Sebastian Stan', 'Peter Dinklage', 'Samuel L. Jackson', 'Benicio del Toro', 'Danai Gurira', 'Benedict Wong', 'Anthony Mackie', 'Don Cheadle', 'Idris Elba', 'Vin Diesel', 'Bradley Cooper', 'William Hurt', 'Stan Lee', 'Ross Marquand', 'Jacob Batalon', 'Ariana Greenblatt', 'Winston Duke', 'Marija Juliette Abney'], year: 2018},

    {title:'Avengers: Endgame',coverImg:'../images/EndGame-Portada.jpg',description:'Después de los eventos devastadores de "Avengers: Infinity War", el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles son las consecuencias... Cuarta y última entrega de la saga "Vengadores".',actors:['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth', 'Scarlett Johansson', 'Jeremy Renner', 'Don Cheadle', 'Paul Rudd', 'Brie Larson', 'Karen Gillan', 'Josh Brolin', 'Benedict Cumberbatch', 'Chadwick Boseman', 'Tom Holland', 'Zoe Saldana', 'Evangeline Lilly', 'Tessa Thompson', 'René Russo', 'Elizabeth Olsen', 'Anthony Mackie', 'Sebastian Stan', 'Tom Hiddleston', 'Danai Gurira', 'Benedict Wong', 'Pom Klementieff', 'Dave Bautista', 'Letitia Wright', 'John Slattery', 'Tilda Swinton', 'Jon Favreau', 'Hayley Atwell', 'Natalie Portman', 'Marisa Tomei', 'Taika Waititi', 'Michael Douglas', 'Angela Bassett', 'Michelle Pfeiffer', 'William Hurt', 'Cobie Smulders', 'Sean Gunn', 'Winston Duke', 'Linda Cardellini', 'Maximiliano Hernández', 'Frank Grillo', 'Hiroyuki Sanada', 'Tom Vaughan-Lawlor', 'James DArcy', 'Jacob Batalon', 'Vin Diesel', 'Bradley Cooper', 'Gwyneth Paltrow', 'Robert Redford', 'Chris Pratt', 'Samuel L. Jackson', 'Ross Marquand', 'Emma Fuhrmann', 'Michael James Shaw', 'Terry Notary', 'Yvette Nicole Brown', 'Callan Mulvey', 'Taylor Patterson', 'Ken Jeong', 'Ty Simpkins', 'Stan Lee'], year: 2019},

    {title:'Captain America: Civil War',coverImg:'../images/civil-war-Portada.jpg',description:'Después de que otro incidente internacional involucre a Los Vengadores, causando varios daños colaterales, aumentan las presiones políticas para instaurar un sistema que exija más responsabilidades y que determine cuándo deben contratar los servicios del grupo de superhéroes. Esta nueva situación dividirá a Los Vengadores, mientras intentan proteger al mundo de un nuevo y terrible villano. Tercera entrega de la saga Capitán América.',actors:['Chris Evans', 'Robert Downey Jr.', 'Sebastian Stan', 'Scarlett Johansson', 'Anthony Mackie', 'Daniel Brühl', 'Don Cheadle', 'Jeremy Renner', 'Chadwick Boseman', 'Paul Bettany', 'Elizabeth Olsen', 'Paul Rudd', 'William Hurt', 'Emily Vancamp', 'Tom Holland', 'Frank Grillo', 'Martin Freeman', 'Marisa Tomei', 'John Kani', 'John Slattery', 'Hope Davis', 'Alfre Woodard', 'Stan Lee', 'Heidi Moneymaker', 'Gene Farber', 'Florence Kasumba'], year:2016},

    {title:'Spider-Man: Homecoming',coverImg:'../images/SpiderMan-HomeComing-Portada.jpg',description:'Peter Parker (Tom Holland) comienza a experimentar su recién descubierta identidad como el superhéroe Spider-Man. Después de la experiencia vivida con los Vengadores, Peter regresa a casa, donde vive con su tía (Marisa Tomei). Bajo la atenta mirada de su mentor Tony Stark (Robert Downey Jr.), Peter intenta mantener una vida normal como cualquier joven de su edad, pero interrumpe en su rutina diaria el nuevo villano Vulture (Michael Keaton) y, con él, lo más importante de la vida de Peter comenzará a verse amenazado.',actors:['Tom Holland', 'Michael Keaton', 'Robert Downey Jr.', 'Jon Favreau', 'Marisa Tomei', 'Jacob Batalon', 'Zendaya', 'Tony Revolori', 'Laura Harrier', 'Angourie Rice', 'Kenneth Choi', 'Michael Barbieri', 'Logan Marshall-Green', 'Donald Glover', 'Tyne Daly', 'Martin Starr', 'Hannibal Buress', 'Abraham Attah', 'Michael Mando', 'Bokeem Woodbine', 'Chris Evans', 'Gwyneth Paltrow', 'Tiffany Espensen', 'Garcelle Beauvais', 'Stan Lee', 'Stewart Steinberg', 'Andy Powers'], year: 2019},

    {title:'Spider-Man: Far from Home',coverImg:'../images/LejosDeCasaPortada.jpg',description:'Peter Parker decide irse junto a MJ, Ned y el resto de sus amigos a pasar unas vacaciones a Europa. Sin embargo, el plan de Parker por dejar de lado sus superpoderes durante unas semanas se ven truncados cuando Nick Fury contacta con él para solicitarle ayuda para frenar el ataque de unas criaturas elementales que están causando el caos en el continente. En ese momento, Parker vuelve a ponerse el traje de Spider-Man para cumplir con su labor.',actors:['Tom Holland', 'Samuel L. Jackson', 'Jake Gyllenhaal', 'Marisa Tomei', 'Robert Downey Jr.','Jon Favreau', 'Zendaya', 'Jacob Batalon', 'Tony Revolori', 'Angourie Rice', 'Remy Hii', 'Martin Starr', 'J.B. Smoove', 'Jorge Lendeborg Jr.', 'Cobie Smulders', 'Numan Acar', 'Yasmin Mwanza', 'Joshua Sinclair-Evans', 'Toni Garrn', 'Peter Billingsley', 'Nicholas Gleaves', 'Claire Rushbrook', 'Michael de Roos', 'Jeroen van Koningsbrugge', 'J.K. Simmons', 'Joseph Long', 'Hiten Patel'],year: 2017}
]
 
const phrases = [
    {title: '¿Es mejor ser temido o ser respetado? Yo me pregunto, ¿es demasiado pedir las dos?'},     
    {title: 'Dicen que la mejor arma es aquella que nunca necesitas siquiera disparar. Respetuosamente, no estoy de acuerdo con eso. Considero que la mejor arma es aquella que sólo tienes que disparar... ¡una sola vez!' },
    {title: '¿Iron Man? Es bastante pegadizo. Suena lindo. Es decir, no es técnicamente preciso, el traje está hecho de una aleación de oro y titanio. Pero es provocador. Simbólicamente, al menos' }, 
    {title: 'Soy Tony Stark. Construyo cosas maravillosas, tengo una chica genial, ocasionalmente salvo el mundo. ¿Por qué no puedo dormir?'},
    {title: 'Qué bueno conocerlo, Dr. Banner. Su trabajo en las colisiones anti-electrones no tiene precedentes. Soy un gran admirador de la manera en que usted pierde el control y se convierte en un enorme y rabioso monstruo verde'},
    { title: 'Esto será como encontrar una aguja en el pajar más grande de todo el planeta... ¡Afortunadamente traje un imán!' },
    { title: 'No tengo que hacer nada, estuve secuestrado por tres meses; así que voy a hacer lo que yo quiera. Quiero una hamburguesa con queso.' },
    { title: 'No es suficiente estar en contra, tienes que estar a favor de algo mejor.' },
    { title: 'Si no podemos proteger la Tierra, puedes apostar a que por lo menos la vengaremos.' },
    { title: 'El traje y yo somos uno.' }]



const events =[{
    title:'Reunión de frikis en Sol',
    theme:'La relación de Tony Stark con su Padre',
    location: 'Sol',coordinates:[41.386230,
     2.174980],
     owner:['5f009810c9f5aa069b8fb5cb'],
     participants:['5f0325ff33eef7217a35f979']

}]
Movie
    .create(movies)
    .then(allMovies => {console.log(`Created ${allMovies.length} movies`)})
    .catch(err => console.log('There was an error creating the movies', err))

Comic
    .create(comics)
    .then(allComics => {console.log(`Created ${allComics.length} comics`)})
    .catch(err => console.log('There was an error creating the comics', err))



Phrase
    .create(phrases)
    .then(allPhrases => {console.log(`Created ${allPhrases.length} phrases`)})
    .catch(err => console.log('There was an error creating the phrases', err))

Event
    .create(events)
    .then(allEvents => {console.log(`Created ${allEvents.length} events`)
        mongoose.connection.close()})
    .catch(err => console.log('There was an error creating the events', err))
        

    ////Promise All


// const moviePromise = Movie.create(movies)
// const comicPromise = Comic.create(comics)
// const phrasePromise = Phrase.create(phrases)
// //const eventsPromise = Event.create(events)
    
// Promise
//     .all([moviePromise, comicPromise, phrasePromise])
//     .then(results => console.log(`Created ${results.length}`))
//      mongoose.connection.close() 
//     .catch( err =>next ( new Error (err)))



