// ===============================
// ZONA DE CONFIGURACIÓN DEL QUIZ
// ===============================

const quizData = {
    bio1: {
        nombre: "PP1 Biología",
        preguntas: [
            {
                pregunta: "1) El tratamiento de un cultivo de células que están proliferando con un compuesto X resulta en que el número de células en telofase aumenta considerablemente respecto de un cultivo no tratado con ese compuesto. A partir de esta observación es posible deducir correctamente que el compuesto X afecta negativamente la:\nI. Citodiéresis\nII. Interacción de miosina con actina\nIII. Interacción de los microtúbulos con los cinetocoros",
                opciones: ["Solo I", "I y II", "I y III", "II y III"],
                respuestaCorrecta: "I y II"
            },
            {
                pregunta: "2) Respecto de las proteínas, ¿Cuál(es) de las siguientes afirmaciones es(son) correcta(s)?\nI. La desnaturación altera la estructura primaria\nII. El plegamiento tridimensional determina su función\nIII. Su estructura cuaternaria se estabiliza principalmente por enlaces covalentes",
                opciones: ["Solo II", "I y II", "II y III", "I, II y III"],
                respuestaCorrecta: "Solo II"
            },
            {
                pregunta: "3) Indique cuál de las siguientes NO corresponde a una función del citoesqueleto",
                opciones: ["Transporte de solutos desde el exterior hacia el interior de la célula", "Movimiento de las células", "Organización del citoplasma y movimiento de organelos y vesículas", "Resistencia al estrés mecánico", "Configuración de la forma de las células"],
                respuestaCorrecta: "Transporte de solutos desde el exterior hacia el interior de la célula"
            },
            {
                pregunta: "4) ¿Cuál(es) de las siguientes es (son) secuencia(s) presente(s) en los cromosomas de eucariontes?\nI. Cinetocoros\nII. Promotores\nIII. Orígenes de replicación",
                opciones: ["I y II", "I, II y III", "I y III", "II y III"],
                respuestaCorrecta: "II y III"
            },
            {
                pregunta: "5) La DNA polimerasa es una enzima que:\nI. Usa bases nitrogenadas como sustrato\nII. Alarga las moléculas de DNA por el extremo 3’OH\nIII. Inicia la replicación del DNA desde cualquier secuencia de la molécula molde",
                opciones: ["Solo I", "Solo II", "I y II", "II y III"],
                respuestaCorrecta: "Solo II"
            },
            {
                pregunta: "6) Con respecto al citoesqueleto, ¿Cuál de las siguientes opciones es INCORRECTA?",
                opciones: ["Los filamentos intermedios estructuran la lámina nuclear", "Las kinesinas y las dineínas hidrolizan ATP para moverse", "Microtúbulos y dineína son responsables de la contracción muscular", "Los microfilamentos de actina participan en la migración celular", "Tanto los microfilamentos de actina como los microtúbulos están compuestos por proteínas globulares"],
                respuestaCorrecta: "Microtúbulos y dineína son responsables de la contracción muscular"
            },
            {
                pregunta: "7) Un anticodón es una secuencia que:\nI. Se encuentra en los tRNA\nII. Parea con un codón complementario\nIII. Es reconocido en el tRNA por una aminoacil-tRNA sintetasa",
                opciones: ["Solo I", "I y II", "II y III", "I, II y III"],
                respuestaCorrecta: "I, II y III"
            },
            {
                pregunta: "8) Respecto de las proteínas destinadas a la matriz de la mitocondria y al interior (lumen) del peroxisoma, es CORRECTO afirmar que tienen en común que:\nI. Su transporte al organelo respectivo es post-traduccional\nII. Su síntesis ocurre en ribosomas unidos al ER\nIII. Deben ser glicosiladas antes de ser transportadas al organelo respectivo",
                opciones: ["Solo I", "Solo II", "Solo III", "I y II"],
                respuestaCorrecta: "Solo I"
            },
            {
                pregunta: "9) La figura más abajo representa un estado inicial en que el soluto y el solvente se encuentran separados y un estado final en que ambos forman una solución. Al respecto, es CORRECTO afirmar que: \nI. El proceso indicado por la flecha no requiere energía externa \nII. El estado final del sistema tiene un contenido de energía mayor que el estado inicial \nIII. En el estado final el sistema es más ordenado (es menos probable) que en el inicial",
                imagen: "https://i.imgur.com/pns7O26.png",
                opciones: ["II y III", "Solo II", "Solo I", "I y II"],
                respuestaCorrecta: "Solo I"
            },
            {
                pregunta: "10) Las aminoacil-tRNA sintetasa son enzimas con capacidad para reconocer:\nI. aminoácidos\nII. mRNAs\nIII. tRNAs",
                opciones: ["Solo I", "Solo III", "I y III", "I, II y III"],
                respuestaCorrecta: "I, II y III"
            },
            {
                pregunta: "11) Con respecto a los mecanismos de comunicación entre células eucariontes. ¿Cuál de las siguientes afirmaciones es INCORRECTA?",
                opciones: ["Un receptor ionotrópico de un neurotransmisor es un ejemplo de receptor acoplado a canal iónico", "Señales extracelulares pueden gatillar cambios en la expresión génica", "Los segundos mensajeros son pequeñas moléculas sintetizadas, liberadas y degradadas de manera controlada", "Una molécula señal, grande y polar es capaz de unirse a un receptor soluble intracelular", "Una misma molécula señal puede inducir distintas respuestas en distintos tipos celulares"],
                respuestaCorrecta: "Una molécula señal, grande y polar es capaz de unirse a un receptor soluble intracelular"
            },
            {
                pregunta: "12) Si una determinada proteína presenta estructura cuaternaria, es CORRECTO afirmar que esa proteína:\nI. Posee solo una subunidad\nII. Está compuesta por más de una subunidad\nIII. En su conformación incluye cuatro tipos de estructura secundaria",
                opciones: ["Solo I", "Solo II", "I y III", "II y III"],
                respuestaCorrecta: "Solo II"
            },
            {
                pregunta: "13) En la figura se muestra la estructura de dos aminoácidos. Respecto de ellas, es CORRECTO afirmar que: \nI. Ambas moléculas presentan cadenas laterales polares \nII. Ambas moléculas presentan cadenas laterales sin carga neta \nIII. La cadena lateral de tirosina es polar y la de fenilalanina es apolar",
                imagen: "https://i.imgur.com/lzokeMA.png",
                opciones: ["II y III", "I y III", "Solo I", "I y II"],
                respuestaCorrecta: "II y III"
            },
            {
                pregunta: "14) Considere la siguiente figura, que ilustra los distintos tipos de transporte de la glucosa en una célula del epitelio intestinal. Al respecto, es CORRECTO afirmar que:",
                imagen: "https://i.imgur.com/ROnNlSn.png",
                opciones: ["1,2 y 3 son tipos de transporte activo del tipo uniporte", "1 y 2 representan tipos de transporte pasivo", "1 y 3 representan tipos de transporte activo", "2 representa un mecanismo de transporte activo de glucosa", "2 representa un canal iónico específico para la glucosa"],
                respuestaCorrecta: "1 y 3 representan tipos de transporte activo"
            },
            {
                pregunta: "15) En un gen, el promotor es una secuencia:",
                opciones: ["El sitio de inicio de la síntesis de una proteína", "Reconocida por el ribosoma", "Reconocida por la RNApol", "Reconocida por la DNApol", "El sitio de inicio de la replicación del DNA"],
                respuestaCorrecta: "Reconocida por la RNApol"
            },
            {
                pregunta: "16) La replicación del DNA en las células es un proceso que:\nI. Es bidireccional\nII. Es semiconservativo\nIII. Se inicia en cualquier parte de una molécula de DNA",
                opciones: ["Solo I", "I y II", "II y III", "I, II y III"],
                respuestaCorrecta: "I y II"
            },
            {
                pregunta: "17) Una droga inhibe el transporte de vesículas desde el ER hacia el aparato de Golgi. ¿Qué esperaría observar en una célula tratada con esta droga?\nI. Aumento del tamaño del aparato de Golgi\nII. Acumulación de proteínas en el lumen del ER\nIII. Incremento en la síntesis de enzimas lisosomales",
                opciones: ["Solo I", "Solo II", "I y III", "II y III"],
                respuestaCorrecta: "Solo II"
            },
            {
                pregunta: "18) Las ciclinas son un tipo de proteínas que:\nI. Se activan al unirse a Cdk\nII. Fosforilan de manera específica a otras proteínas\nIII. Se producen y se destruyen en las distintas etapas del ciclo celular",
                opciones: ["Solo I", "Solo III", "I y II", "I, II y III"],
                respuestaCorrecta: "Solo III"
            },
            {
                pregunta: "19) El lisosoma es un organelo cuyo pH interno es aproximadamente 5,0, mientras que el pH del citoplasma es aproximadamente 7,4. Al respecto es correcto afirmar que:\nI. Hay más protones en el citoplasma que al interior del lisosoma\nII. El transporte de protones al interior del lisosoma es un ejemplo de transporte activo\nIII. La salida de protones desde el lisosoma hacia el citoplasma requiere de una fuente externa de energía",
                opciones: ["Solo I", "Solo II", "I y II", "II y III"],
                respuestaCorrecta: "Solo II"
            },
            {
                pregunta: "20) La activación de una proteína G tiene, generalmente, como consecuencia una cascada de eventos. Entre estos eventos, característicos de la vía dependiente de pKa, están los siguientes: \n1) Activación de una proteína quinasa \n2) Producción de cAMP \n3) Fosforilación de proteínas específicas \n4) Activación de adenilatociclasa. Ordena de forma temporal estos eventos de forma correcta.",
                opciones: ["4-2-1-3", "2-4-1-3", "4-1-2-3", "2-1-4-3"],
                respuestaCorrecta: "4-2-1-3"
            },
            {
                pregunta: "21) Respecto al tráfico vesicular es CORRECTO afirmar que:\nI. Algunas vesículas tienen una cubierta de clatrina\nII. El destino de las vesículas depende de las proteínas de superficie\nIII. Algunas vesículas importan proteínas directamente desde el citoplasma de la célula",
                opciones: ["Solo I", "I y II", "II y III", "I, II y III"],
                respuestaCorrecta: "I y II"
            },
            {
                pregunta: "22) Muchos receptores de membrana se encuentran acoplados a una proteína G (GPCR). En esa asociación, la proteína G actúa como:\nI. Receptor\nII. Transductor\nIII. Amplificador",
                opciones: ["Solo I", "Solo II", "I y II", "II y III"],
                respuestaCorrecta: "Solo II"
            },
            {
                pregunta: "23) ¿Cuál(es) de los siguientes polisacáridos cumple(n) funciones de reserva energética?\nI. Quitina\nII. Glicógeno\nIII. Almidón",
                opciones: ["Solo I", "Solo II", "II y III", "I, II y III"],
                respuestaCorrecta: "II y III"
            },
            {
                pregunta: "24) Respecto de los canales iónicos y los transportadores (carriers) es CORRECTO afirmar que tienen en común que ambos:\nI. Transportan solutos de manera específica\nII. Tienen velocidades de transporte similares\nIII. Utilizan una fuente de energía distinta de la gradiente electroquímica",
                opciones: ["Solo I", "Solo II", "I y II", "I, II y III"],
                respuestaCorrecta: "Solo I"
            },
            {
                pregunta: "25) La difusión es un proceso físico que:\nI. Es espontáneo\nII. Requiere la presencia de una membrana\nIII. Necesita un aporte de energía externa para ocurrir",
                opciones: ["Solo I", "Solo II", "I y II", "I, II y III"],
                respuestaCorrecta: "I y II"
            },
            {
                pregunta: "26) Respecto de una señal que desencadena una respuesta en las células es CORRECTO afirmar que:\nI. Puede generar diferentes respuestas de un mismo tipo celular\nII. Es reconocida y decodificada solo por un receptor acoplado a la membrana celular\nIII. Puede desencadenar diferentes respuestas dependiendo del tipo celular que señaliza",
                opciones: ["Solo I", "Solo III", "I y III", "II y III"],
                respuestaCorrecta: "Solo III"
            },
            {
                pregunta: "27) Respecto de la síntesis de los RNAs y proteínas es CORRECTO afirmar que:\nI. Los tRNA se sintetizan desde su extremo 3’ al 5’\nII. Los mRNA se sintetizan desde su extremo 5’ al 3’\nIII. Las proteínas se sintetizan desde su extremo N hacia su extremo C terminal",
                opciones: ["Solo III", "I y II", "II y III", "I, II y III"],
                respuestaCorrecta: "II y III"
            },
            {
                pregunta: "28) Durante la destinación de proteínas al ER, es CORRECTO afirmar que:\nI. Su síntesis ocurre en ribosomas unidos al ER\nII. Las proteínas pueden ser translocadas completamente al lumen (interior) del ER\nIII. Las proteínas transmembrana que atraviesan varias veces la membrana del ER poseen más de una señal para su translocación",
                opciones: ["Solo I", "I y II", "II y III", "I, II y III"],
                respuestaCorrecta: "I, II y III"
            },
            {
                pregunta: "29) ¿Qué ocurriría si la membrana interna de la mitocondria, por alguna razón, se vuelve permeable a los H+?\nI. La mitocondria no sintetiza ATP\nII. Se detiene el transporte de electrones\nIII. El pH en el espacio intermembrana se iguala al de la matriz mitocondrial",
                opciones: ["Solo III", "I y III", "II y III", "I, II y III"],
                respuestaCorrecta: "Solo III"
            },
            {
                pregunta: "30) Respecto de la respiración mitocondrial y la fotosíntesis, ¿Cuál(es) de las siguientes afirmaciones es(son) CORRECTAS?\nI. El transporte de electrones ocurre, en ambos procesos, en la membrana interna\nII. NADPH y ATP son producidos en la fase clara y usados en la fase oscura de la fotosíntesis\nIII. En los dos procesos, el transporte de protones se acopla con la síntesis de ATP mediante un gradiente de electrones",
                opciones: ["Solo II", "I y II", "II y III", "I, II y III"],
                respuestaCorrecta: "II y III"
            },
            {
                pregunta: "31) Respecto de las células que existen en la actualidad es CORRECTO afirmar que:\nI. Su material genético puede ser RNA\nII. Comparten el mismo código genético\nIII. La membrana que las delimita es una bicapa lipídica simétrica",
                opciones: ["Solo II", "I y II", "I y III", "I, II y III"],
                respuestaCorrecta: "Solo II"
            },
            {
                pregunta: "32) Una molécula X ingresa a un determinado tipo de célula, pero deja de hacerlo al inactivar experimentalmente todas las proteínas de membrana. A partir de ESTA OBSERVACIÓN se puede afirmar CORRECTAMENTE que:\nI. La molécula X es polar\nII. La molécula X ingresa por transporte pasivo\nIII. La bicapa lipídica es permeable a la molécula X",
                opciones: ["Solo I", "Solo II", "I y II", "Ninguna de las anteriores"],
                respuestaCorrecta: "Solo I"
            },
            {
                pregunta: "33) Los receptores que participan en los procesos de transducción de señales pueden estar asociados con:\nI. Proteasas\nII. Proteínas G\nIII. Canales iónicos",
                opciones: ["Solo II", "I y II", "II y III", "I, II y III"],
                respuestaCorrecta: "II y III"
            },
            {
                pregunta: "34) ¿Cuál(es) de las siguientes aseveraciones es(son) CORRECTA(S)?\nI. Algunos nucleótidos actúan como coenzimas (cofactores)\nII. Los polisacáridos actúan como catalizadores\nIII. Los esteroides se usan principalmente como reserva de energía",
                opciones: ["Solo I", "Solo II", "I y III", "II y III"],
                respuestaCorrecta: "Solo I"
            },
            {
                pregunta: "35) Una señal interactúa de un modo específico con un receptor provocando cierto efecto. De acuerdo con lo anterior, ¿Cuál(es) de los siguientes ejemplos es(son) posible(s) de considerar válidamente como señal?\nI. Luz\nII. Presión\nIII. Temperatura",
                opciones: ["Solo I", "I y II", "II y III", "I, II y III"],
                respuestaCorrecta: "I, II y III"
            },
            {
                pregunta: "36) Si se fecunda un oocito de anfibio se observa que el tamaño del embrión se mantiene constante desde el cigoto (una célula) hasta la etapa de mórula (16-64 células). Esta observación puede explicarse CORRECTAMENTE afirmando que:\nI. Las células proliferan, pero no crecen\nII. Las etapas G1 y G2 son muy breves o no existen\nIII. Ocurre la división celular pero no la replicación del DNA",
                opciones: ["Solo I", "I y II", "I y III", "I, II y III"],
                respuestaCorrecta: "I y II"
            },
            {
                pregunta: "37) Respecto de las kinesinas y dineínas, indique las aseveraciones CORRECTAS:\nI. Son motores celulares\nII. Hidrolizan ATP para producir movimiento\nIII. Se movilizan sobre los filamentos de actina en direcciones opuestas",
                opciones: ["Solo I", "I y II", "II y III", "I, II y III"],
                respuestaCorrecta: "I y II"
            },
            {
                pregunta: "38) Durante la fosforilación oxidativa la energía de la gradiente de protones se transforma directamente en:",
                opciones: ["Fuerza protón-motriz", "Energía de transporte de electrones", "ATP", "Energía mecánica (movimiento)", "Energía de enlace químico"],
                respuestaCorrecta: "ATP"
            },
            {
                pregunta: "39) ¿Cuál(es) de las siguientes proteínas NO son sintetizadas en el núcleo de las células?\nI. RNA polimerasas\nII. DNA polimerasas\nIII. De los ribosomas",
                opciones: ["Solo III", "I y II", "II y III", "I, II y III"],
                respuestaCorrecta: "I y II"
            },
            {
                pregunta: "40) ¿Cuál de las siguientes sentencias describe correctamente la función del O2 en la respiración celular aeróbica?",
                opciones: ["Dador inicial de los electrones", "Aceptor final de los electrones en la cadena respiratoria", "Oxidante de intermediarios del ciclo de Krebs", "Aporta la energía para generar el gradiente de H+ necesario para la síntesis de ATP", "Participa de las reacciones de descarboxilaciones oxidativas del ciclo de Krebs"],
                respuestaCorrecta: "Aceptor final de los electrones en la cadena respiratoria"
            },
            {
                pregunta: "41) La citocalasina es una droga que interfiere la polimerización de la actina. Considerando este hecho, la citocalasina afectará directamente:",
                opciones: ["La citodiéresis (citoquinesis)", "El movimiento del flagelo de los espermatozoides", "La alineación de los cromosomas en la metafase", "El movimiento de los cilios de un paramecio", "El movimiento de vesículas en un axón"],
                respuestaCorrecta: "La citodiéresis (citoquinesis)"
            },
            {
                pregunta: "42) ¿Cuál de las siguientes aseveraciones respecto de la DNA polimerasa es INCORRECTA?",
                opciones: ["Usa una hebra de DNA como molde", "Requiere de un partidor de RNA (primer)", "Usa ribonucleótidos", "Alarga cadenas por el extremo 3’OH", "Puede cometer “errores” pero es capaz de repararlos"],
                respuestaCorrecta: "Usa ribonucleótidos"
            },
            {
                pregunta: "43) ¿Cuál(es) de las siguientes aseveraciones es(son) CORRECTAS con respecto a la apoptosis?:\nI. Puede activarse por una señal interna o externa\nII. Las caspasas actúan como receptores de las señales que desencadenan el proceso\nIII. La liberación del citocromo-c desde la mitocondria al citoplasma es un evento clave",
                opciones: ["Solo I", "I y II", "I y III", "I, II y III"],
                respuestaCorrecta: "I y III"
            },
            {
                pregunta: "44) Respecto del metabolismo celular es CORRECTO afirmar que:\nI. Es una red de reacciones químicas interconectadas\nII. Las reacciones químicas que lo constituyen son catalizadas por enzimas\nIII. Toda la energía “producida” por el catabolismo se usa en los procesos anabólicos",
                opciones: ["Solo I", "I y II", "I y III", "I, II y III"],
                respuestaCorrecta: "I, II y III"
            },
            {
                pregunta: "45) Indique en las siguientes opciones, la asociación CORRECTA entre proceso y lugar de ocurrencia:\nI. Ciclo de Krebs………. Matriz mitocondrial\nII. Ciclo de Calvin……….Tilacoides del cloroplasto\nIII. Transporte de electrones……….Membrana interna del cloroplasto",
                opciones: ["Solo I", "I y II", "II y III", "I, II y III"],
                respuestaCorrecta: "Solo I"
            },
            {
                pregunta: "46) Respecto de los enlaces fosfodiéster es CORRECTO afirmar que:\nI. Siempre establecen pares entre A:T, y pares G:C\nII. Unen el 3’OH de un nucleótido al 5’OH del siguiente\nIII. Se forman entre los anillos de bases nitrogenadas consecutivas",
                opciones: ["Solo II", "I y II", "II y III", "I, II y III"],
                respuestaCorrecta: "II y III"
            },
            {
                pregunta: "47) ¿Cuál(es) de los siguientes procesos ocurren en el complejo de Golgi?\nI. Síntesis de los lípidos de membrana\nII. Modificación de los oligosacáridos de las glicoporteínas de membrana\nIII. Distribución de proteínas (sorting) hacia diferentes compartimientos celulares",
                opciones: ["Solo I", "Solo II", "II y III", "I, II y III"],
                respuestaCorrecta: "II y III"
            },
            {
                pregunta: "48) Respecto de los segundos mensajeros, ¿Cuál(es) de las siguientes afirmaciones es(son) CORRECTA(S)?\nI. Calcio (Ca2+) y AMP cíclico (cAMP) son ejemplos de segundos mensajeros\nII. Permiten que una vía de señalización intracelular se amplifique\nIII. En algunos casos son liberados al medio extracelular luego de la recepción de la primera señal",
                opciones: ["Solo I", "I y II", "II y III", "I, II y III"],
                respuestaCorrecta: "I y II"
            },
            {
                pregunta: "49) En un medio acuoso los glicerofosfolípidos:\nI. Forman miscelas o bicapas\nII. Se hidrolizan a glicerol y ácidos grasos\nIII. Interactúan con el agua mediante sus cadenas hidrocarbonadas",
                opciones: ["Solo I", "I y II", "I y III", "I, II y III"],
                respuestaCorrecta: "Solo I"
            },
            {
                pregunta: "50) Respecto del apareamiento de bases en el DNA ¿Cuál(es) de las siguientes afirmaciones es(son) correctas?\nI. Cantidad de A=T, G=C\nII. Cantidad de A=G, T=C\nIII. Cantidad de bases púricas=bases pirimídicas",
                opciones: ["Solo I", "I y III", "II y III", "I, II y III"],
                respuestaCorrecta: "I y III"
            },
            {
                pregunta: "51) La proteína Rb (retinoblastoma) es sustrato del complejo Ciclina-G1-Cdk. La actividad de ese complejo sobre Rb permite que éste se disocie de la proteína E2F, la que desencadena a su vez la entrada en la etapa S. Si la proteína Rb se encuentra permanentemente fosforilada sucederá que:\nI. Rb inactivará a E2F\nII. Rb no interactuará con E2F\nIII. La célula ejecutará la fase S sin el control de Rb",
                opciones: ["Solo I", "Solo II", "II y III", "I, II y III"],
                respuestaCorrecta: "II y III"
            },
            {
                pregunta: "52) Con respecto a las moléculas de agua es CORRECTO afirmar que:\nI. Son moléculas polares\nII. Son moléculas neutras\nIII. Interactúan con moléculas cargadas debido a su polaridad",
                opciones: ["Solo I", "I y II", "I, II y III", "Ninguna de las anteriores"],
                respuestaCorrecta: "I, II y III"
            },
            {
                pregunta: "53) Usted ha recibido una muestra de una exploración en un planeta... cuya composición de bases es la siguiente: \nTimina 29%, \nGuanina 35,5%, \nCitosina 16%, \nAdenina 19,5%. \nCon los datos indicados es posible deducir CORRECTAMENTE que:",
                opciones: ["El polinucleótido es una molécula de DNA de hebra doble", "El contenido de pirimidinas es igual que el de purinas", "El polinucleótido es una molécula de DNA de hebra simple", "Timina y Adenina parean mediante 2 puentes de H", "Que el contenido de pirimidinas es menor que el de purinas"],
                respuestaCorrecta: "Que el contenido de pirimidinas es menor que el de purinas"
            },
            {
                pregunta: "54) Los intrones son secuencias de:\nI. DNA que se eliminan durante la replicación\nII. mRNA que actúan como partidores (primers) en el inicio de la traducción\nIII. mRNA que se eliminan durante el procesamiento (maduración) del mRNA en eucariontes",
                opciones: ["Solo I", "Solo II", "Solo III", "Ninguna de las anteriores"],
                respuestaCorrecta: "Solo III"
            },
            {
                pregunta: "55) Respecto del conjunto básico de organelos presente en las células eucariontes es CORRECTO afirmar que:\nI. Las mitocondrias existen solo en célula animales\nII. Los lisosomas son abundantes en células que efectúan exocitosis\nIII. El RER es abundante en células secretoras",
                opciones: ["Solo I", "Solo II", "Solo III", "I y III"],
                respuestaCorrecta: "Solo III"
            },
            {
                pregunta: "56) La contracción muscular y el movimiento de cilios y flagelos tienen en común que en ambos se requiere la participación de:\nI. ATP\nII. Actina\nIII. Filamentos Intermedios",
                opciones: ["Solo I", "Solo II", "I y II", "I, II y III"],
                respuestaCorrecta: "Solo I"
            },
            {
                pregunta: "57) Se sabe que en la membrana plasmática de un tipo de célula determinado están presentes los lípidos A, B y C. Al tratar esas células con un reactivo polar se observa que solo los lípidos A y C resultan modificados. De esta observación puede deducirse CORRECTAMENTE que:\nI. La composición lipídica de cada monocapa es idéntica\nII. El lípido B se encuentra exclusivamente en la monocapa interna\nIII. Los lípidos A y C se encuentran exclusivamente en la monocapa externa",
                opciones: ["Solo II", "I y II", "I y III", "II y III"],
                respuestaCorrecta: "Solo II"
            },
            {
                pregunta: "58) La proteína X se encuentra unida a la proteína Y cuando las células se encuentran en la etapa G1 del ciclo celular. Cuando la proteína X es fosforilada, se disocia de la proteína Y, lo que resulta en que la célula entra en la etapa S. De acuerdo con esta descripción, la actividad de la proteína X se describe correctamente como:",
                opciones: ["Ciclina", "Oncogénica", "Cdk", "Supresora de tumores", "Fosfatasa"],
                respuestaCorrecta: "Supresora de tumores"
            },
            {
                pregunta: "59) El RER es el lugar donde se sintetizan las:\nI. Proteínas de las mitocondrias\nII. Enzimas presentes en el núcleo\nIII. Proteínas que serán exportadas al espacio extracelular",
                opciones: ["Solo I", "Solo III", "I y II", "II y III"],
                respuestaCorrecta: "Solo III"
            },
            {
                pregunta: "60) Los mecanismos de control del ciclo celular aseguran que:\nI. Cada evento ocurra solo una vez por ciclo\nII. Los distintos eventos puedan ocurrir en cualquier momento\nIII. Cada vez que se inicia un evento proceda hasta completarse",
                opciones: ["Solo I", "I y II", "I y III", "I, II y III"],
                respuestaCorrecta: "I y III"
            },
            {
                pregunta: "61) Si se tienen dos proteínas distintas de una misma célula, sus diferencias funcionales así como las diferencias en la estructura tridimensional, son el resultado directo de su distinta:\nI. Afinidad por un ligando\nII. Secuencia aminoacídica\nIII. Función en el metabolismo",
                opciones: ["Solo I", "Solo II", "I y II", "II y III"],
                respuestaCorrecta: "Solo II"
            },
            {
                pregunta: "62) En la figura a continuación se muestra la estructura de dos aminoácidos. Respecto de ellas, es CORRECTO afirmar que: \nI. Ambas moléculas presentan cadenas laterales polares \nII. Ambas moléculas presentan cadenas laterales sin carga neta \nIII. La cadena lateral de la alanina es polar y la de la serina es apolar",
                imagen: "https://i.imgur.com/HvVxohq.png",
                opciones: ["Solo I", "Solo II", "I y II", "II y III"],
                respuestaCorrecta: "Solo II"
            },
            {
                pregunta: "63) De acuerdo con las reglas de complementariedad, en una molécula de DNA de doble hebra se cumple siempre que:",
                opciones: ["A=G", "A+G=T+C", "A+T=G+C", "A=C", "A=U"],
                respuestaCorrecta: "A+G=T+C"
            },
            {
                pregunta: "64) En un experimento se fusionan dos células, una de ratón y otra de humano, se forma lo que se denomina un heterocarion. Al cabo de un tiempo, la membrana del heterocarion resultante se marca con anticuerpos fluorescentes que detectan proteínas de membrana de ratón o proteínas de membrana de humano. Al observar al microscopio, los fluoróforos se ven mezclados. El resultado descrito permite concluir correctamente que la membrana:",
                opciones: ["Las proteínas se mueven lateralmente", " Es selectivamente permeable", "Está formada por dos monocapas de fosfolípidos", "Los lípidos se mueven lateralmente", "Es viscosa"],
                respuestaCorrecta: "Las proteínas se mueven lateralmente"
            }
        ]
    },
    bio2: {
        nombre: "Quiz Temario - 1",
        preguntas: [
            {
                pregunta: "1) ¿Cuál de las siguientes es una característica fundamental de la ciencia?",
                opciones: ["Conocimiento absoluto e inmutable.", "Conocimiento racional, sistemático y verificable.", "Un conjunto de opiniones personales.", "Basado únicamente en la filosofía."],
                respuestaCorrecta: "Conocimiento racional, sistemático y verificable."
            },
            {
                pregunta: "2) ¿Qué estudia la biología?",
                opciones: ["Únicamente la evolución de las especies.", "Solo la composición química de los organismos.", "A los seres vivos desde todos sus ámbitos (bioquímica, fisiología, origen, etc.).", "Las leyes físicas que gobiernan la naturaleza."],
                respuestaCorrecta: "A los seres vivos desde todos sus ámbitos (bioquímica, fisiología, origen, etc.)."
            },
            {
                pregunta: "3) Se clasifica la biología como una ciencia...",
                opciones: ["Formal y exacta.", "Fáctica y aplicada.", "Natural y fáctica.", "Social y teórica."],
                respuestaCorrecta: "Natural y fáctica."
            },
            {
                pregunta: "4) ¿Cuál es la primera etapa del 'quehacer científico' mencionada en la presentación?",
                opciones: ["Formular una hipótesis.", "Realizar un experimento.", "Observar.", "Publicar los resultados."],
                respuestaCorrecta: "Observar."
            },
            {
                pregunta: "5) De acuerdo con el modelo de Francis Bacon, la fuente de todo conocimiento y el objeto de investigación son, respectivamente:",
                opciones: ["La razón y la lógica.", "Los sentidos y la Naturaleza.", "Las teorías y los modelos.", "La filosofía y la religión."],
                respuestaCorrecta: "Los sentidos y la Naturaleza."
            },
            {
                pregunta: "6) ¿Qué es una hipótesis en el contexto del método científico?",
                opciones: ["Una ley científicamente comprobada.", "La observación detallada de un fenómeno.", "La solución más probable al problema de estudio, planteada como una afirmación.", "El resultado final de un experimento."],
                respuestaCorrecta: "La solución más probable al problema de estudio, planteada como una afirmación."
            },
            {
                pregunta: "7) El proceso de razonamiento que va de una teoría general a predicciones específicas se denomina:",
                opciones: ["Inducción.", "Deducción.", "Serendipia.", "Observación."],
                respuestaCorrecta: "Deducción."
            },
            {
                pregunta: "8) ¿Qué significa el término 'serendipia' en el ámbito científico?",
                opciones: ["La repetición exacta de un experimento para verificarlo.", "Un error sistemático en la recolección de datos.", "Hacer un descubrimiento afortunado de manera accidental gracias a la capacidad de observación.", "La revisión de un trabajo por pares antes de su publicación."],
                respuestaCorrecta: "Hacer un descubrimiento afortunado de manera accidental gracias a la capacidad de observación."
            },
            {
                pregunta: "9) ¿Por qué el conocimiento científico no se considera 'verdadero' de forma definitiva?",
                opciones: ["Porque los científicos cometen muchos errores.", "Porque una hipótesis aceptada hoy puede ser modificada o rechazada mañana.", "Porque la ciencia solo se basa en opiniones subjetivas.", "Porque depende de la financiación de las investigaciones."],
                respuestaCorrecta: "Porque una hipótesis aceptada hoy puede ser modificada o rechazada mañana."
            },
            {
                pregunta: "10) Se enfatiza que el conocimiento científico debe ser público. ¿Cómo se logra esto principalmente?",
                opciones: ["Guardando los resultados en secreto para mantener la ventaja competitiva.", "A través de publicaciones en revistas científicas, congresos y conferencias.", "Comunicándolo solo verbalmente a colegas de confianza.", "Registrando patentes para uso comercial exclusivo e inmediato."],
                respuestaCorrecta: "A través de publicaciones en revistas científicas, congresos y conferencias."
            },
            {
                pregunta: "11) ¿Cuál es el propósito principal de la etapa de 'análisis' en el quehacer científico?",
                opciones: ["Comunicar los resultados a la comunidad.", "Descomponer lo observado para encontrar características ocultas o de difícil acceso.", "Formular la pregunta de investigación inicial.", "Descartar todas las hipótesis posibles sin experimentar."],
                respuestaCorrecta: "Descomponer lo observado para encontrar características ocultas o de difícil acceso."
            },
            {
                pregunta: "12) ¿Qué tipo de preguntas NO suelen abordarse directamente desde la ciencia?",
                opciones: ["Preguntas sobre el 'qué' y el 'cómo' de un fenómeno.", "Preguntas sobre el 'cuándo' y el 'dónde' ocurre un evento.", "Preguntas propias de la filosofía y la religión.", "Preguntas cuantitativas sobre el 'cuánto'."],
                respuestaCorrecta: "Preguntas propias de la filosofía y la religión."
            },
            {
                pregunta: "13) En el método científico, después de formular una hipótesis, el siguiente paso crucial es:",
                opciones: ["Volver a observar el mismo fenómeno sin un plan.", "Realizar un experimento o recopilar datos para evaluarla.", "Publicar la hipótesis inmediatamente en una revista.", "Buscar una nueva pregunta de investigación diferente."],
                respuestaCorrecta: "Realizar un experimento o recopilar datos para evaluarla."
            },
            {
                pregunta: "14) ¿Cuál de las siguientes afirmaciones describe mejor el ciclo del método científico?",
                opciones: ["Es un proceso lineal que termina al encontrar una respuesta definitiva.", "Es un proceso iterativo, donde los hallazgos pueden llevar a nuevas preguntas.", "Es un proceso rígido que nunca permite modificaciones a las ideas previas.", "Es un proceso que siempre debe confirmar la hipótesis inicial para ser válido."],
                respuestaCorrecta: "Es un proceso iterativo, donde los hallazgos pueden llevar a nuevas preguntas."
            },
            {
                pregunta: "15) ¿Quiénes acuñaron el término 'biología' alrededor de 1802 de forma independiente?",
                opciones: ["Francis Bacon y Charles Darwin.", "Isaac Newton y Albert Einstein.", "Jean-Baptiste Lamarck y Gottfried Reinhold Treviranus.", "Arquímedes y Gregor Mendel."],
                respuestaCorrecta: "Jean-Baptiste Lamarck y Gottfried Reinhold Treviranus."
            }

        ]
    },
    bio3: {
        nombre: "Quiz Temario - 2",
        preguntas: [
            {
                pregunta: "1) ¿Qué postula el 'determinismo estructural'?",
                opciones: ["Que todas las observaciones son puramente subjetivas.", "Que lo que un ser vivo puede percibir y hacer está determinado por su estructura biológica.", "Que la estructura de un organismo no influye en su percepción.", "Que el aprendizaje puede superar cualquier limitación física."],
                respuestaCorrecta: "Que lo que un ser vivo puede percibir y hacer está determinado por su estructura biológica."
            },
            {
                pregunta: "2) De acuerdo con la teoría de la autopoiesis, un ser vivo es fundamentalmente un sistema que:",
                opciones: ["Solo intercambia energía con su entorno, pero no materia.", "Se produce continuamente a sí mismo y mantiene sus propios límites.", "Depende de otros sistemas para producir sus componentes.", "Tiene una lista fija e inmutable de propiedades."],
                respuestaCorrecta: "Se produce continuamente a sí mismo y mantiene sus propios límites."
            },
            {
                pregunta: "3) ¿Cuál de las siguientes teorías sobre el origen de la vida fue desacreditada por los experimentos de Francesco Redi y Louis Pasteur?",
                opciones: ["La teoría creacionista.", "La teoría de la generación espontánea.", "La teoría de la panspermia.", "La teoría de la evolución química."],
                respuestaCorrecta: "La teoría de la generación espontánea."
            },
            {
                pregunta: "4) El experimento de Miller y Urey (1953) aportó evidencia a favor de la teoría de la evolución química al demostrar que:",
                opciones: ["La vida llegó a la Tierra en meteoritos.", "Se pueden formar moléculas orgánicas (como aminoácidos) a partir de compuestos inorgánicos en condiciones similares a las de la Tierra primitiva.", "Las células eucariontes surgieron de la simbiosis de procariotas.", "Los seres vivos pueden surgir de materia inerte en la actualidad."],
                respuestaCorrecta: "Se pueden formar moléculas orgánicas (como aminoácidos) a partir de compuestos inorgánicos en condiciones similares a las de la Tierra primitiva."
            },
            {
                pregunta: "5) Según la propuesta de Maturana y Varela, ¿por qué un virus no es considerado un ser vivo?",
                opciones: ["Porque tiene un borde o límite que lo separa del exterior.", "Porque no posee material genético como el ADN.", "Porque no cumple con los criterios de la autopoiesis, como producir sus propios componentes de forma autónoma.", "Porque es demasiado pequeño para ser considerado un organismo."],
                respuestaCorrecta: "Porque no cumple con los criterios de la autopoiesis, como producir sus propios componentes de forma autónoma."
            },
            {
                pregunta: "6) La teoría de la endosimbiosis seriada, popularizada por Lynn Margulis, explica el origen de:",
                opciones: ["La vida a partir de materia inorgánica.", "El núcleo, las mitocondrias y los cloroplastos en las células eucariontes a partir de la incorporación de bacterias.", "Los organismos pluricelulares a partir de colonias de unicelulares.", "La diversidad de especies a través de la selección natural."],
                respuestaCorrecta: "El núcleo, las mitocondrias y los cloroplastos en las células eucariontes a partir de la incorporación de bacterias."
            },
            {
                pregunta: "7) ¿Cuál es una diferencia clave entre las células procariotas y eucariotas?",
                opciones: ["Las procariotas tienen ribosomas y las eucariotas no.", "Las procariotas carecen de núcleo definido y de organelos membranosos, mientras que las eucariotas sí los poseen.", "Las eucariotas siempre son unicelulares.", "Solo las procariotas tienen pared celular."],
                respuestaCorrecta: "Las procariotas carecen de núcleo definido y de organelos membranosos, mientras que las eucariotas sí los poseen."
            },
            {
                pregunta: "8) ¿Qué son los sistemas autopoiéticos de 'primer orden' y 'segundo orden'?",
                opciones: ["Primer orden son los virus y segundo orden las bacterias.", "Primer orden son las células y segundo orden son los organismos pluricelulares (agregados celulares).", "Primer orden son los organismos simples y segundo orden los complejos.", "Primer orden son las plantas y segundo orden los animales."],
                respuestaCorrecta: "Primer orden son las células y segundo orden son los organismos pluricelulares (agregados celulares)."
            },
            {
                pregunta: "9) ¿Qué propone la teoría de la Panspermia o Cosmozoica sobre el origen de la vida?",
                opciones: ["Que la vida se originó en los océanos primitivos.", "Que la vida fue creada por una entidad divina.", "Que la vida no se originó en la Tierra, sino que llegó desde otro lugar del espacio, posiblemente en un meteorito.", "Que los organismos vivos surgen de la materia en descomposición."],
                respuestaCorrecta: "Que la vida no se originó en la Tierra, sino que llegó desde otro lugar del espacio, posiblemente en un meteorito."
            },
            {
                pregunta: "10) Además de la autopoiesis, ¿cuál de las siguientes se menciona como una característica de los seres vivos?",
                opciones: ["Ser sistemas completamente cerrados y aislados.", "Irritabilidad, crecimiento, adaptación y reproducción.", "Estar compuestos únicamente por moléculas inorgánicas.", "Carecer de movimiento propio."],
                respuestaCorrecta: "Irritabilidad, crecimiento, adaptación y reproducción."
            },
            {
                pregunta: "11) La distinción de un objeto (como un ser vivo) depende del observador. Esto implica que la percepción:",
                opciones: ["Es completamente subjetiva y no tiene base real.", "Está determinada por la estructura biológica del que observa (determinismo estructural).", "Es igual para todos los seres vivos, sin importar su especie.", "No es una herramienta útil para la ciencia."],
                respuestaCorrecta: "Está determinada por la estructura biológica del que observa (determinismo estructural)."
            },
            {
                pregunta: "12) ¿Cuál de los siguientes postulados pertenece a la Teoría Celular?",
                opciones: ["Todos los seres vivos están formados por células y toda célula procede de otra.", "Las células se generan espontáneamente a partir de coacervados.", "Solo los animales están compuestos por células.", "Las células eucariotas son más simples que las procariotas."],
                respuestaCorrecta: "Todos los seres vivos están formados por células y toda célula procede de otra."
            },
            {
                pregunta: "13) La clasificación de los seres vivos en tres dominios (Bacteria, Archaea y Eukarya), propuesta por Woese, se basa principalmente en:",
                opciones: ["La forma en que se mueven los organismos.", "El lugar donde habitan.", "Diferencias a nivel molecular, como las secuencias del ARN ribosómico.", "El tamaño de las células."],
                respuestaCorrecta: "Diferencias a nivel molecular, como las secuencias del ARN ribosómico."
            },
            {
                pregunta: "14) En el contexto de la autopoiesis, ¿cuál es uno de los criterios de validación para un sistema vivo?",
                opciones: ["Debe ser capaz de realizar fotosíntesis.", "Debe poseer un sistema nervioso.", "Debe tener un límite o borde semipermeable, y los componentes de ese borde deben ser producidos por una red de reacciones interna.", "Debe poder reproducirse sexualmente."],
                respuestaCorrecta: "Debe tener un límite o borde semipermeable, y los componentes de ese borde deben ser producidos por una red de reacciones interna."
            },
            {
                pregunta: "15) ¿Qué son los 'coacervados' en el contexto del origen de la vida?",
                opciones: ["Los primeros organismos fotosintéticos.", "Sistemas pre-celulares formados por la organización de moléculas orgánicas en bicapas lipídicas dentro de un ambiente acuoso.", "Un tipo de virus primitivo.", "Los fósiles más antiguos encontrados en la Tierra."],
                respuestaCorrecta: "Sistemas pre-celulares formados por la organización de moléculas orgánicas en bicapas lipídicas dentro de un ambiente acuoso."
            }

        ]
    },
    bio4: {
        nombre: "Quiz Temario - 3",
        preguntas: [
            {
                pregunta: "1) ¿Cuál es uno de los postulados fundamentales de la Teoría Celular?",
                opciones: ["Las células se originan espontáneamente a partir de materia inerte.", "Solo los organismos complejos como los animales están formados por células.", "Toda célula procede de otra célula preexistente.", "Las células no contienen material hereditario."],
                respuestaCorrecta: "Toda célula procede de otra célula preexistente."
            },
            {
                pregunta: "2) ¿Qué es LUCA (Last Universal Common Ancestor)?",
                opciones: ["El primer organismo eucarionte que existió.", "El ancestro común más reciente de todos los organismos vivos actuales, del cual se derivan los tres dominios de la vida.", "Un tipo de bacteria extinta que dio origen a las mitocondrias.", "La primera molécula de ARN con capacidad de replicarse."],
                respuestaCorrecta: "El ancestro común más reciente de todos los organismos vivos actuales, del cual se derivan los tres dominios de la vida."
            },
            {
                pregunta: "3) La Teoría de la Endosimbiosis, propuesta para explicar el origen de la célula eucarionte, postula que:",
                opciones: ["Las células eucariontes evolucionaron directamente a partir de una única arquea.", "Organelos como las mitocondrias y los cloroplastos se originaron a partir de bacterias que fueron 'engullidas' por una célula huésped ancestral.", "Las células se fusionaron para crear organismos más grandes.", "El núcleo celular se formó por una invaginación de la membrana plasmática."],
                respuestaCorrecta: "Organelos como las mitocondrias y los cloroplastos se originaron a partir de bacterias que fueron 'engullidas' por una célula huésped ancestral."
            },
            {
                pregunta: "4) ¿Cuál de las siguientes es una característica común a TODAS las células (procariotas y eucariotas)?",
                opciones: ["Poseen un núcleo que contiene el ADN.", "Utilizan el ADN como material genético y lo traducen a proteínas de manera similar.", "Tienen mitocondrias para generar energía.", "Su tamaño es siempre superior a los 100 µm."],
                respuestaCorrecta: "Utilizan el ADN como material genético y lo traducen a proteínas de manera similar."
            },
            {
                pregunta: "5) El sistema de clasificación de los seres vivos en tres dominios o supra-reinos, propuesto por Carl Woese, incluye:",
                opciones: ["Animalia, Plantae y Fungi.", "Procariota, Eucariota y Virus.", "Bacteria, Archaea y Eukarya.", "Monera, Protista y Animalia."],
                respuestaCorrecta: "Bacteria, Archaea y Eukarya."
            },
            {
                pregunta: "6) ¿Qué significa LECA (Last Eukaryotic Common Ancestor)?",
                opciones: ["El último ancestro común de todos los seres vivos.", "El ancestro común más reciente de todas las células eucariontes.", "El primer organismo fotosintético.", "Una célula procariota primitiva."],
                respuestaCorrecta: "El ancestro común más reciente de todas las células eucariontes."
            },
            {
                pregunta: "7) Ordena los siguientes niveles de organización biológica de menor a mayor complejidad:",
                opciones: ["Célula -> Tejido -> Molécula -> Órgano -> Organismo.", "Molécula -> Célula -> Tejido -> Órgano -> Organismo.", "Organismo -> Órgano -> Tejido -> Célula -> Molécula.", "Tejido -> Molécula -> Célula -> Organismo -> Órgano."],
                respuestaCorrecta: "Molécula -> Célula -> Tejido -> Órgano -> Organismo."
            },
            {
                pregunta: "8) ¿Cuál es la principal diferencia estructural entre las arqueobacterias (Archaea) y las bacterias (Bacteria)?",
                opciones: ["Las arqueas tienen núcleo y las bacterias no.", "La pared celular de las bacterias contiene peptidoglicano, mientras que la de las arqueas no.", "Solo las bacterias pueden vivir en ambientes extremos.", "Las arqueas realizan fotosíntesis y las bacterias no."],
                respuestaCorrecta: "La pared celular de las bacterias contiene peptidoglicano, mientras que la de las arqueas no."
            },
            {
                pregunta: "9) Según la teoría de la endosimbiosis en serie, ¿qué evento ocurrió primero en la evolución de la célula eucarionte?",
                opciones: ["La adquisición de cloroplastos.", "El desarrollo de la multicelularidad.", "La fusión de una arquea con una bacteria nadadora (espiroqueta) o la adquisición de la mitocondria.", "La aparición del ADN como material genético."],
                respuestaCorrecta: "La fusión de una arquea con una bacteria nadadora (espiroqueta) o la adquisición de la mitocondria."
            },
            {
                pregunta: "10) ¿A qué se refiere el concepto de que la célula es la 'unidad funcional' de los seres vivos?",
                opciones: ["A que todos los seres vivos están hechos de una sola célula.", "A que las funciones vitales de un organismo (metabolismo, respuesta a estímulos, etc.) ocurren dentro de las células.", "A que todas las células tienen la misma función.", "A que las células solo funcionan cuando forman parte de un tejido."],
                respuestaCorrecta: "A que las funciones vitales de un organismo (metabolismo, respuesta a estímulos, etc.) ocurren dentro de las células."
            },
            {
                pregunta: "11) ¿Qué son los sistemas autopoiéticos de segundo orden?",
                opciones: ["Células individuales que se producen a sí mismas.", "Organismos pluricelulares, que existen como agregados de sistemas autopoiéticos de primer orden (células).", "Virus que dependen de una célula para replicarse.", "Ecosistemas completos."],
                respuestaCorrecta: "Organismos pluricelulares, que existen como agregados de sistemas autopoiéticos de primer orden (células)."
            },
            {
                pregunta: "12) ¿Cuál de las siguientes estructuras NO es exclusiva de las células eucariotas?",
                opciones: ["Núcleo.", "Mitocondria.", "Retículo endoplasmático.", "Ribosomas."],
                respuestaCorrecta: "Ribosomas."
            },
            {
                pregunta: "13) ¿Qué evidencia apoya la teoría endosimbiótica sobre el origen de las mitocondrias y cloroplastos?",
                opciones: ["Que carecen de material genético propio.", "Que tienen ribosomas 70S, similares a los de las bacterias, y su propio ADN circular.", "Que se forman a partir del núcleo celular.", "Que están presentes en todas las células, incluidas las procariotas."],
                respuestaCorrecta: "Que tienen ribosomas 70S, similares a los de las bacterias, y su propio ADN circular."
            },
            {
                pregunta: "14) En la jerarquía de la clasificación biológica, ¿cuál es el nivel más inclusivo (abarca más organismos)?",
                opciones: ["Reino.", "Dominio.", "Filo.", "Especie."],
                respuestaCorrecta: "Dominio."
            },
            {
                pregunta: "15) ¿Qué implicación tiene el cuarto postulado de la Teoría Celular, que afirma que las células contienen el material hereditario (ADN)?",
                opciones: ["Que las características de una célula se transmiten a sus descendientes.", "Que el ADN se genera espontáneamente en cada nueva célula.", "Que todas las células de un organismo tienen ADN diferente.", "Que el ADN no es importante para la función celular."],
                respuestaCorrecta: "Que las características de una célula se transmiten a sus descendientes."
            }

        ]
    },
    bio5: {
        nombre: "Quiz Temario - 4",
        preguntas: [
            {
                pregunta: "1) ¿Cuál es la principal razón por la que el carbono es fundamental para la vida?",
                opciones: ["Porque es el elemento más abundante en la Tierra.", "Por su capacidad de enlazarse consigo mismo formando cadenas y anillos estables.", "Porque es un gas a temperatura ambiente.", "Porque no reacciona con otros elementos."],
                respuestaCorrecta: "Por su capacidad de enlazarse consigo mismo formando cadenas y anillos estables."
            },
            {
                pregunta: "2) Un enlace covalente se forma cuando dos átomos:",
                opciones: ["Transfieren electrones completamente, formando iones.", "Comparten uno o más pares de electrones.", "Se atraen por fuerzas de van der Waals.", "Interactúan a través de puentes de hidrógeno."],
                respuestaCorrecta: "Comparten uno o más pares de electrones."
            },
            {
                pregunta: "3) La polaridad de la molécula de agua, que le permite formar puentes de hidrógeno, se debe a:",
                opciones: ["La presencia de dos átomos de hidrógeno y uno de oxígeno.", "La distribución desigual de la carga eléctrica, con una carga parcial negativa en el oxígeno y positiva en los hidrógenos.", "Que es una molécula lineal.", "Su bajo peso molecular."],
                respuestaCorrecta: "La distribución desigual de la carga eléctrica, con una carga parcial negativa en el oxígeno y positiva en los hidrógenos."
            },
            {
                pregunta: "4) ¿Qué son las moléculas hidrófobas?",
                opciones: ["Moléculas polares que se disuelven fácilmente en agua.", "Moléculas apolares (como grasas y aceites) que no interactúan con el agua y tienden a agruparse.", "Iones que se disocian en agua.", "Moléculas que forman puentes de hidrógeno con el agua."],
                respuestaCorrecta: "Moléculas apolares (como grasas y aceites) que no interactúan con el agua y tienden a agruparse."
            },
            {
                pregunta: "5) El enlace que une a los monosacáridos para formar polisacáridos se denomina:",
                opciones: ["Enlace peptídico.", "Enlace fosfodiéster.", "Enlace glucosídico.", "Enlace iónico."],
                respuestaCorrecta: "Enlace glucosídico."
            },
            {
                pregunta: "6) ¿Cuál de los siguientes polisacáridos cumple una función de reserva energética en animales?",
                opciones: ["Celulosa.", "Quitina.", "Almidón.", "Glucógeno."],
                respuestaCorrecta: "Glucógeno."
            },
            {
                pregunta: "7) La celulosa es un polisacárido estructural importante en:",
                opciones: ["La pared celular de las plantas.", "El exoesqueleto de los insectos.", "Las membranas celulares de los animales.", "El citoplasma de las bacterias."],
                respuestaCorrecta: "La pared celular de las plantas."
            },
            {
                pregunta: "8) Un nucleótido, el monómero de los ácidos nucleicos, está compuesto por:",
                opciones: ["Un aminoácido, un azúcar y un grupo fosfato.", "Una base nitrogenada, un azúcar pentosa y un grupo fosfato.", "Una base nitrogenada y un azúcar hexosa.", "Un ácido graso y un glicerol."],
                respuestaCorrecta: "Una base nitrogenada, un azúcar pentosa y un grupo fosfato."
            },
            {
                pregunta: "9) ¿Cuál es una de las principales diferencias estructurales entre el ADN y el ARN?",
                opciones: ["El ADN contiene ribosa y el ARN desoxirribosa.", "El ADN contiene desoxirribosa y la base timina, mientras que el ARN contiene ribosa y la base uracilo.", "El ADN es una cadena simple y el ARN es una doble hélice.", "El ADN no tiene grupos fosfato."],
                respuestaCorrecta: "El ADN contiene desoxirribosa y la base timina, mientras que el ARN contiene ribosa y la base uracilo."
            },
            {
                pregunta: "10) Las reglas de Chargaff, fundamentales para el modelo de la doble hélice del ADN, establecen que:",
                opciones: ["La cantidad de adenina (A) es igual a la de guanina (G).", "La cantidad de adenina (A) es igual a la de timina (T) y la de guanina (G) es igual a la de citosina (C).", "La cantidad de purinas siempre es el doble que la de pirimidinas.", "Las bases nitrogenadas se unen al azar."],
                respuestaCorrecta: "La cantidad de adenina (A) es igual a la de timina (T) y la de guanina (G) es igual a la de citosina (C)."
            },
            {
                pregunta: "11) El enlace que une los nucleótidos en una cadena de ADN o ARN se llama:",
                opciones: ["Enlace glucosídico.", "Enlace de hidrógeno.", "Enlace fosfodiéster.", "Enlace iónico."],
                respuestaCorrecta: "Enlace fosfodiéster."
            },
            {
                pregunta: "12) En la estructura de la doble hélice del ADN, las dos hebras se mantienen unidas por:",
                opciones: ["Enlaces covalentes entre las bases nitrogenadas.", "Puentes de hidrógeno entre los pares de bases complementarias (A-T y G-C).", "Enlaces iónicos entre los grupos fosfato.", "Interacciones hidrofóbicas."],
                respuestaCorrecta: "Puentes de hidrógeno entre los pares de bases complementarias (A-T y G-C)."
            },
            {
                pregunta: "13) ¿Cuál es la orientación de las dos hebras de ADN en la doble hélice?",
                opciones: ["Ambas corren en la misma dirección (paralelas).", "Son antiparalelas, una corre en dirección 5' a 3' y la otra en 3' a 5'.", "Su orientación es aleatoria.", "Se enrollan en direcciones opuestas."],
                respuestaCorrecta: "Son antiparalelas, una corre en dirección 5' a 3' y la otra en 3' a 5'."
            },
            {
                pregunta: "14) Además de ser un componente del ARN, ¿qué otra función vital cumple el ATP (trifosfato de adenosina) en la célula?",
                opciones: ["Actúa como principal molécula portadora de energía para las reacciones metabólicas.", "Forma la estructura de la membrana celular.", "Cataliza reacciones químicas como una enzima.", "Almacena información genética a largo plazo."],
                respuestaCorrecta: "Actúa como principal molécula portadora de energía para las reacciones metabólicas."
            },
            {
                pregunta: "15) Las bases nitrogenadas Adenina (A) y Guanina (G) pertenecen al grupo de las:",
                opciones: ["Pirimidinas.", "Purinas.", "Pentosas.", "Hexosas."],
                respuestaCorrecta: "Purinas."
            },
            {
                pregunta: "16) ¿Qué función cumple el AMP cíclico (cAMP) en la célula?",
                opciones: ["Es una fuente de energía primaria.", "Actúa como un segundo mensajero en la transmisión de señales celulares.", "Es un componente estructural de la pared celular.", "Transporta oxígeno en la sangre."],
                respuestaCorrecta: "Actúa como un segundo mensajero en la transmisión de señales celulares."
            },
            {
                pregunta: "17) ¿Cuál de las siguientes afirmaciones sobre el agua es correcta?",
                opciones: ["Es una molécula apolar.", "El agua reduce significativamente la fuerza de los enlaces iónicos y los puentes de hidrógeno entre otras moléculas disueltas en ella.", "El hielo es más denso que el agua líquida.", "No puede actuar como reactivo en reacciones químicas."],
                respuestaCorrecta: "El agua reduce significativamente la fuerza de los enlaces iónicos y los puentes de hidrógeno entre otras moléculas disueltas en ella."
            },
            {
                pregunta: "18) La lactosa, el azúcar de la leche, es un ejemplo de:",
                opciones: ["Monosacárido.", "Polisacárido.", "Disacárido, formado por glucosa y galactosa.", "Oligosacárido."],
                respuestaCorrecta: "Disacárido, formado por glucosa y galactosa."
            },
            {
                pregunta: "19) ¿Qué tipo de molécula es la quitina y dónde se encuentra?",
                opciones: ["Una proteína que se encuentra en el músculo.", "Un lípido de la membrana celular.", "Un polisacárido estructural que forma el exoesqueleto de los insectos y la pared celular de los hongos.", "Un ácido nucleico que almacena información."],
                respuestaCorrecta: "Un polisacárido estructural que forma el exoesqueleto de los insectos y la pared celular de los hongos."
            },
            {
                pregunta: "20) Los tres tipos principales de ARN que participan en la síntesis de proteínas son:",
                opciones: ["ARN mensajero, ARN de transferencia y ARN ribosomal.", "ARN polimerasa, ARN ligasa y ARN helicasa.", "ARN primario, ARN secundario y ARN terciario.", "ARN nuclear, ARN citoplasmático y ARN mitocondrial."],
                respuestaCorrecta: "ARN mensajero, ARN de transferencia y ARN ribosomal."
            }

        ]
    },
    bio6: {
        nombre: "Quiz Temario - 5",
        preguntas: [
            {
                pregunta: "1) ¿Cuál es la unidad monomérica que constituye a las proteínas?",
                opciones: ["Nucleótido.", "Monosacárido.", "Aminoácido.", "Ácido graso."],
                respuestaCorrecta: "Aminoácido."
            },
            {
                pregunta: "2) La estructura general de un aminoácido consiste en un carbono central (alfa) unido a:",
                opciones: ["Un grupo amino, un grupo carboxilo, un átomo de hidrógeno y una cadena lateral (R).", "Dos grupos amino y un grupo carboxilo.", "Un grupo fosfato, un azúcar y una base nitrogenada.", "Una cadena de hidrocarburos y un grupo hidroxilo."],
                respuestaCorrecta: "Un grupo amino, un grupo carboxilo, un átomo de hidrógeno y una cadena lateral (R)."
            },
            {
                pregunta: "3) ¿Qué son los aminoácidos esenciales?",
                opciones: ["Los únicos 20 aminoácidos que existen en la naturaleza.", "Aminoácidos que el organismo puede sintetizar por sí mismo.", "Aminoácidos que deben ser suministrados a través de la dieta porque el organismo no puede sintetizarlos.", "Los aminoácidos más abundantes en las proteínas."],
                respuestaCorrecta: "Aminoácidos que deben ser suministrados a través de la dieta porque el organismo no puede sintetizarlos."
            },
            {
                pregunta: "4) El enlace que une a dos aminoácidos para formar un péptido se denomina:",
                opciones: ["Enlace glucosídico.", "Enlace peptídico.", "Enlace de hidrógeno.", "Enlace fosfodiéster."],
                respuestaCorrecta: "Enlace peptídico."
            },
            {
                pregunta: "5) ¿A qué corresponde la estructura primaria de una proteína?",
                opciones: ["Al plegamiento tridimensional de la cadena.", "A la secuencia lineal de aminoácidos en la cadena polipeptídica.", "A la unión de varias cadenas polipeptídicas.", "A la formación de hélices alfa y hojas beta."],
                respuestaCorrecta: "A la secuencia lineal de aminoácidos en la cadena polipeptídica."
            },
            {
                pregunta: "6) Las hélices alfa (α-hélice) y las hojas plegadas beta (β-hoja) son ejemplos de:",
                opciones: ["Estructura primaria de una proteína.", "Estructura secundaria de una proteína.", "Estructura cuaternaria de una proteína.", "La desnaturalización de una proteína."],
                respuestaCorrecta: "Estructura secundaria de una proteína."
            },
            {
                pregunta: "7) La estructura terciaria de una proteína, que define su forma tridimensional globular o fibrosa, se estabiliza mediante interacciones como:",
                opciones: ["Únicamente enlaces peptídicos.", "Puentes disulfuro, interacciones iónicas, puentes de hidrógeno y efectos hidrofóbicos.", "Solo enlaces covalentes.", "La interacción con ácidos nucleicos."],
                respuestaCorrecta: "Puentes disulfuro, interacciones iónicas, puentes de hidrógeno y efectos hidrofóbicos."
            },
            {
                pregunta: "8) ¿Cuándo se dice que una proteína tiene estructura cuaternaria?",
                opciones: ["Cuando tiene más de 100 aminoácidos.", "Cuando está formada por la unión de dos o más cadenas polipeptídicas (subunidades).", "Cuando su estructura es completamente lineal.", "Cuando se pliega en una forma fibrosa como el colágeno."],
                respuestaCorrecta: "Cuando está formada por la unión de dos o más cadenas polipeptídicas (subunidades)."
            },
            {
                pregunta: "9) Las proteínas desempeñan múltiples funciones en los seres vivos, como:",
                opciones: ["Solo almacenar información genética.", "Actuar como enzimas, transportar sustancias, formar estructuras (citoesqueleto) y defender al organismo (anticuerpos).", "Únicamente servir como reserva de energía a corto plazo.", "Formar la bicapa lipídica de las membranas."],
                respuestaCorrecta: "Actuar como enzimas, transportar sustancias, formar estructuras (citoesqueleto) y defender al organismo (anticuerpos)."
            },
            {
                pregunta: "10) Los lípidos son un grupo heterogéneo de moléculas caracterizadas por ser:",
                opciones: ["Solubles en agua y polares.", "Insolubles en agua (hidrofóbicas) y no formar polímeros de la misma manera que las proteínas o los carbohidratos.", "Monómeros de las membranas celulares.", "Siempre de estructura lineal."],
                respuestaCorrecta: "Insolubles en agua (hidrofóbicas) y no formar polímeros de la misma manera que las proteínas o los carbohidratos."
            },
            {
                pregunta: "11) Los ácidos grasos se clasifican en saturados e insaturados. Los insaturados se caracterizan por:",
                opciones: ["No tener dobles enlaces en su cadena hidrocarbonada.", "Ser sólidos a temperatura ambiente.", "Tener uno o más dobles enlaces en su cadena hidrocarbonada, lo que provoca 'quiebres' en su estructura.", "Ser completamente rectos y flexibles."],
                respuestaCorrecta: "Tener uno o más dobles enlaces en su cadena hidrocarbonada, lo que provoca 'quiebres' en su estructura."
            },
            {
                pregunta: "12) ¿Cuál es la función principal de los triglicéridos (grasas neutras) en los animales?",
                opciones: ["Actuar como enzimas.", "Servir como material de reserva energética y aislante térmico.", "Transportar información genética.", "Formar la estructura de los músculos."],
                respuestaCorrecta: "Servir como material de reserva energética y aislante térmico."
            },
            {
                pregunta: "13) Los fosfolípidos son componentes fundamentales de las membranas celulares porque:",
                opciones: ["Son completamente hidrofóbicos.", "Son anfipáticos, con una cabeza polar (hidrofílica) y colas apolares (hidrofóbicas), lo que les permite formar una bicapa en un medio acuoso.", "Son rígidos y no permiten el paso de ninguna sustancia.", "Son una fuente de energía rápida para la célula."],
                respuestaCorrecta: "Son anfipáticos, con una cabeza polar (hidrofílica) y colas apolares (hidrofóbicas), lo que les permite formar una bicapa en un medio acuoso."
            },
            {
                pregunta: "14) El colesterol es un tipo de lípido esteroide cuya función principal en las membranas celulares animales es:",
                opciones: ["Almacenar energía.", "Actuar como receptor de señales.", "Mantener la fluidez de la membrana, evitando que los fosfolípidos se empaqueten demasiado.", "Transportar iones a través de la membrana."],
                respuestaCorrecta: "Mantener la fluidez de la membrana, evitando que los fosfolípidos se empaqueten demasiado."
            },
            {
                pregunta: "15) Hormonas como la testosterona y la progesterona son ejemplos de lípidos derivados del:",
                opciones: ["Glicerol.", "Esfingol.", "Colesterol (y su estructura base, el esterano).", "Ácido palmítico."],
                respuestaCorrecta: "Colesterol (y su estructura base, el esterano)."
            },
            {
                pregunta: "16) Las lipoproteínas como el HDL y el LDL son complejos de lípidos y proteínas cuya función es:",
                opciones: ["Digerir grasas en el intestino.", "Transportar lípidos, como el colesterol, a través de la sangre.", "Formar la estructura de la pared celular.", "Actuar como hormonas sexuales."],
                respuestaCorrecta: "Transportar lípidos, como el colesterol, a través de la sangre."
            },
            {
                pregunta: "17) Una proteína con forma alargada, como el colágeno o la queratina, se clasifica como:",
                opciones: ["Globular.", "Fibrosa.", "Mixta.", "Desnaturalizada."],
                respuestaCorrecta: "Fibrosa."
            },
            {
                pregunta: "18) ¿Qué son los cerebrósidos y gangliósidos?",
                opciones: ["Tipos de proteínas de transporte.", "Tipos de glucolípidos que se encuentran principalmente en las membranas de las células nerviosas.", "Hormonas esteroidales.", "Ácidos grasos esenciales."],
                respuestaCorrecta: "Tipos de glucolípidos que se encuentran principalmente en las membranas de las células nerviosas."
            }

        ]
    },
    bio7: {
        nombre: "Quiz Temario - 6",
        preguntas: [
            {
                pregunta: "1) Según el modelo del mosaico fluido, una membrana biológica se describe mejor como:",
                opciones: ["Una estructura rígida y estática de proteínas y lípidos.", "Una bicapa de lípidos en la que las proteínas están incrustadas y pueden moverse lateralmente.", "Una capa de proteínas sobre una bicapa lipídica fija (modelo de Danielli-Davson).", "Una única capa de fosfolípidos con proteínas en la superficie."],
                respuestaCorrecta: "Una bicapa de lípidos en la que las proteínas están incrustadas y pueden moverse lateralmente."
            },
            {
                pregunta: "2) ¿Cuál es la función principal de la compartimentalización celular mediante organelos?",
                opciones: ["Aumentar el tamaño total de la célula.", "Permitir que ocurran simultáneamente procesos bioquímicos especializados y a menudo incompatibles en diferentes regiones.", "Almacenar agua y nutrientes únicamente.", "Facilitar la división celular exclusivamente."],
                respuestaCorrecta: "Permitir que ocurran simultáneamente procesos bioquímicos especializados y a menudo incompatibles en diferentes regiones."
            },
            {
                pregunta: "3) El Retículo Endoplasmático Rugoso (RER) se caracteriza por tener ribosomas adheridos y su función principal es:",
                opciones: ["La detoxificación de la célula y el metabolismo de lípidos.", "La síntesis de proteínas que serán secretadas o insertadas en otras membranas.", "La producción de ATP mediante la respiración celular.", "La digestión de desechos celulares."],
                respuestaCorrecta: "La síntesis de proteínas que serán secretadas o insertadas en otras membranas."
            },
            {
                pregunta: "4) Los lisosomas son organelos que contienen hidrolasas ácidas. ¿Cuál es su función primordial?",
                opciones: ["La síntesis de lípidos y esteroides.", "El empaquetamiento y modificación de proteínas.", "La digestión intracelular de macromoléculas, organelos viejos y partículas fagocitadas.", "La producción de peróxido de hidrógeno."],
                respuestaCorrecta: "La digestión intracelular de macromoléculas, organelos viejos y partículas fagocitadas."
            },
            {
                pregunta: "5) ¿Qué tipo de transporte a través de la membrana requiere un gasto de energía (como ATP) para mover una sustancia en contra de su gradiente de concentración?",
                opciones: ["Difusión simple.", "Difusión facilitada.", "Ósmosis.", "Transporte activo."],
                respuestaCorrecta: "Transporte activo."
            },
            {
                pregunta: "6) Los peroxisomas son organelos especializados en:",
                opciones: ["Realizar la glucólisis.", "Llevar a cabo reacciones de oxidación que producen y degradan peróxido de hidrógeno (H₂O₂), participando en la detoxificación.", "Almacenar calcio.", "Sintetizar el ARN ribosomal."],
                respuestaCorrecta: "Llevar a cabo reacciones de oxidación que producen y degradan peróxido de hidrógeno (H₂O₂), participando en la detoxificación."
            },
            {
                pregunta: "7) El movimiento de agua a través de una membrana semipermeable, desde una zona de menor concentración de solutos a una de mayor concentración, se conoce como:",
                opciones: ["Transporte activo.", "Difusión facilitada.", "Ósmosis.", "Endocitosis."],
                respuestaCorrecta: "Ósmosis."
            },
            {
                pregunta: "8) El experimento de Frye y Edidin, donde fusionaron células de ratón y humanas, demostró una característica clave de la membrana plasmática:",
                opciones: ["Su composición lipídica es simétrica.", "Las proteínas están fijas en la membrana.", "La fluidez de la membrana y la capacidad de las proteínas para difundir lateralmente.", "La membrana es impermeable a los anticuerpos."],
                respuestaCorrecta: "La fluidez de la membrana y la capacidad de las proteínas para difundir lateralmente."
            },
            {
                pregunta: "9) ¿Cuál es el papel del colesterol en las membranas de las células animales?",
                opciones: ["Actuar como la principal fuente de energía.", "Formar canales para el paso de iones.", "Regular la fluidez, evitando que sea demasiado fluida a altas temperaturas o demasiado rígida a bajas temperaturas.", "Servir como marcador de reconocimiento celular."],
                respuestaCorrecta: "Regular la fluidez, evitando que sea demasiado fluida a altas temperaturas o demasiado rígida a bajas temperaturas."
            },
            {
                pregunta: "10) Las proteínas que están firmemente ancladas en la bicapa lipídica, a menudo atravesándola por completo, se denominan:",
                opciones: ["Proteínas periféricas.", "Proteínas integrales de membrana.", "Glicoproteínas.", "Lipoproteínas."],
                respuestaCorrecta: "Proteínas integrales de membrana."
            },
            {
                pregunta: "11) Una célula animal colocada en una solución hipertónica (con mayor concentración de solutos que el citoplasma) sufrirá el siguiente efecto:",
                opciones: ["Se hinchará y se lisará (romperá).", "Perderá agua y se arrugará (crenación).", "No experimentará ningún cambio en su volumen.", "Aumentará su turgencia."],
                respuestaCorrecta: "Perderá agua y se arrugará (crenación)."
            },
            {
                pregunta: "12) ¿Cuál es la diferencia fundamental entre un canal y un transportador (carrier)?",
                opciones: ["Los canales requieren ATP y los transportadores no.", "Los canales forman un poro acuoso a través del cual pasan los solutos, mientras que los transportadores se unen al soluto y cambian su conformación para moverlo.", "Los transportadores mueven solutos más rápido que los canales.", "Solo los canales pueden realizar transporte activo."],
                respuestaCorrecta: "Los canales forman un poro acuoso a través del cual pasan los solutos, mientras que los transportadores se unen al soluto y cambian su conformación para moverlo."
            },
            {
                pregunta: "13) La bomba de Sodio-Potasio (Na⁺/K⁺ ATPasa) es un ejemplo de:",
                opciones: ["Un simporte que mueve Na⁺ y K⁺ en la misma dirección.", "Transporte pasivo a favor del gradiente.", "Un antiporte que utiliza ATP para mover 3 Na⁺ hacia el exterior y 2 K⁺ hacia el interior de la célula.", "Un canal iónico regulado por voltaje."],
                respuestaCorrecta: "Un antiporte que utiliza ATP para mover 3 Na⁺ hacia el exterior y 2 K⁺ hacia el interior de la célula."
            },
            {
                pregunta: "14) ¿Qué son las 'balsas lipídicas' (lipid rafts)?",
                opciones: ["Regiones de la membrana donde no hay lípidos.", "Microdominios de la membrana enriquecidos en colesterol y esfingolípidos que organizan proteínas para la transducción de señales.", "Vesículas que transportan lípidos fuera de la célula.", "Poros permanentes en la membrana celular."],
                respuestaCorrecta: "Microdominios de la membrana enriquecidos en colesterol y esfingolípidos que organizan proteínas para la transducción de señales."
            },
            {
                pregunta: "15) Moléculas pequeñas y apolares como el O₂ y el CO₂ atraviesan la membrana celular principalmente por:",
                opciones: ["Transporte activo.", "Difusión simple, directamente a través de la bicapa lipídica.", "Canales iónicos.", "Bombas de protones."],
                respuestaCorrecta: "Difusión simple, directamente a través de la bicapa lipídica."
            },
            {
                pregunta: "16) El transporte acoplado (simporte o antiporte) utiliza la energía almacenada en un gradiente de concentración de un ion (como el Na⁺) para:",
                opciones: ["Mover únicamente ese ion a favor de su gradiente.", "Transportar otra molécula en contra de su propio gradiente de concentración.", "Sintetizar ATP.", "Mover agua por ósmosis."],
                respuestaCorrecta: "Transportar otra molécula en contra de su propio gradiente de concentración."
            },
            {
                pregunta: "17) Los canales iónicos pueden ser 'regulados' (gated), lo que significa que se abren y cierran en respuesta a estímulos específicos como:",
                opciones: ["Solamente la presencia de ATP.", "Cambios en el voltaje de la membrana, la unión de un ligando o un estímulo mecánico.", "La temperatura de la célula.", "La concentración de glucosa."],
                respuestaCorrecta: "Cambios en el voltaje de la membrana, la unión de un ligando o un estímulo mecánico."
            },
            {
                pregunta: "18) En el transporte transcelular de glucosa en el epitelio intestinal, ¿qué mecanismo se utiliza en la membrana apical para introducir glucosa a la célula en contra de su gradiente?",
                opciones: ["Un transporte pasivo de glucosa (uniporte).", "Un simporte de Na⁺-glucosa.", "Una bomba de glucosa que utiliza ATP.", "Difusión simple de la glucosa."],
                respuestaCorrecta: "Un simporte de Na⁺-glucosa."
            },
            {
                pregunta: "19) La asimetría de la membrana plasmática se refiere a que:",
                opciones: ["Las proteínas están distribuidas de manera uniforme.", "La composición de lípidos y proteínas de la monocapa interna es diferente a la de la monocapa externa.", "La membrana es más gruesa en unas zonas que en otras.", "Todas las membranas de la célula son idénticas."],
                respuestaCorrecta: "La composición de lípidos y proteínas de la monocapa interna es diferente a la de la monocapa externa."
            },
            {
                pregunta: "20) El transporte pasivo mediado por transportadores (difusión facilitada) se diferencia de la difusión simple en que:",
                opciones: ["Requiere energía en forma de ATP.", "Puede mover solutos en contra del gradiente de concentración.", "La velocidad de transporte es saturable, ya que depende de un número finito de proteínas transportadoras.", "Solo transporta moléculas apolares."],
                respuestaCorrecta: "La velocidad de transporte es saturable, ya que depende de un número finito de proteínas transportadoras."
            }

        ]
    },
        bio8: {
        nombre: "Quiz Temario - 7",
        preguntas: [
            {
                pregunta: "1) ¿Qué postula el 'dogma central de la biología molecular'?",
                opciones: ["Que la información genética puede fluir en cualquier dirección entre ADN, ARN y proteínas.", "Que las proteínas transfieren información al ARN.", "Que la información genética fluye en una sola dirección: del ADN al ARN y de este a la proteína.", "Que el ADN se sintetiza a partir de proteínas."],
                respuestaCorrecta: "Que la información genética fluye en una sola dirección: del ADN al ARN y de este a la proteína."
            },
            {
                pregunta: "2) La replicación del ADN es un proceso semiconservativo, lo que significa que:",
                opciones: ["Se conserva solo una de las dos hebras originales de ADN.", "Cada una de las dos moléculas de ADN hijas contiene una hebra original (molde) y una hebra nueva.", "La mitad de la información genética se pierde en cada replicación.", "Las dos hebras de la molécula de ADN hija son completamente nuevas."],
                respuestaCorrecta: "Cada una de las dos moléculas de ADN hijas contiene una hebra original (molde) y una hebra nueva."
            },
            {
                pregunta: "3) ¿Cuál es la principal enzima responsable de sintetizar la nueva hebra de ADN durante la replicación?",
                opciones: ["ARN polimerasa.", "ADN ligasa.", "ADN polimerasa.", "Helicasa."],
                respuestaCorrecta: "ADN polimerasa."
            },
            {
                pregunta: "4) ¿Cuál es una diferencia clave en el inicio de la replicación entre procariotas y eucariotas?",
                opciones: ["Los eucariotas no tienen orígenes de replicación.", "Los procariotas tienen muchos orígenes de replicación, mientras que los eucariotas solo tienen uno.", "Los procariotas generalmente tienen un solo origen de replicación, mientras que los eucariotas tienen múltiples orígenes.", "La replicación es unidireccional en procariotas y bidireccional en eucariotas."],
                respuestaCorrecta: "Los procariotas generalmente tienen un solo origen de replicación, mientras que los eucariotas tienen múltiples orígenes."
            },
            {
                pregunta: "5) Durante la replicación del ADN, la hebra rezagada (discontinua) se sintetiza en forma de pequeños fragmentos llamados:",
                opciones: ["Fragmentos de Okazaki.", "Cebadores o primers.", "Intrones.", "Promotores."],
                respuestaCorrecta: "Fragmentos de Okazaki."
            },
            {
                pregunta: "6) La enzima primasa es esencial para iniciar la replicación porque:",
                opciones: ["Une los fragmentos de ADN de la hebra rezagada.", "Sintetiza un pequeño cebador de ARN que proporciona un extremo 3'-OH libre para la ADN polimerasa.", "Separa las dos hebras de la doble hélice de ADN.", "Corrige los errores cometidos por la ADN polimerasa."],
                respuestaCorrecta: "Sintetiza un pequeño cebador de ARN que proporciona un extremo 3'-OH libre para la ADN polimerasa."
            },
            {
                pregunta: "7) La enzima responsable de la transcripción, es decir, la síntesis de ARN a partir de un molde de ADN, es la:",
                opciones: ["ADN polimerasa.", "Ribosoma.", "ARN polimerasa.", "Telomerasa."],
                respuestaCorrecta: "ARN polimerasa."
            },
            {
                pregunta: "8) En el proceso de transcripción, ¿qué es un promotor?",
                opciones: ["La secuencia de ADN donde finaliza la transcripción.", "Una proteína que ayuda a plegar el ARN.", "Una secuencia específica de ADN a la que se une la ARN polimerasa para iniciar la transcripción.", "El ARN recién sintetizado antes de su procesamiento."],
                respuestaCorrecta: "Una secuencia específica de ADN a la que se une la ARN polimerasa para iniciar la transcripción."
            },
            {
                pregunta: "9) En las células eucariotas, la transcripción ocurre en el __________, mientras que en las procariotas ocurre en el __________",
                opciones: ["citoplasma; núcleo.", "núcleo; citoplasma (citosol).", "retículo endoplasmático; citoplasma.", "núcleo; ribosoma."],
                respuestaCorrecta: "núcleo; citoplasma (citosol)."
            },
            {
                pregunta: "10) Una diferencia fundamental entre los genes de eucariotas y procariotas es que los genes eucariotas:",
                opciones: ["Son más cortos y no tienen promotores.", "Contienen secuencias no codificantes (intrones) que deben ser eliminadas del transcrito de ARN.", "Se transcriben y traducen simultáneamente.", "No utilizan el mismo código genético que los procariotas."],
                respuestaCorrecta: "Contienen secuencias no codificantes (intrones) que deben ser eliminadas del transcrito de ARN."
            },
            {
                pregunta: "11) El proceso de 'splicing' o corte y empalme en eucariotas consiste en:",
                opciones: ["Añadir una cola de poli-A al extremo 3' del ARN.", "Eliminar los exones y unir los intrones.", "Eliminar las secuencias intrónicas (no codificantes) y unir las secuencias exónicas (codificantes) del transcrito de ARN.", "Añadir un capuchón (cap) en el extremo 5' del ARN."],
                respuestaCorrecta: "Eliminar las secuencias intrónicas (no codificantes) y unir las secuencias exónicas (codificantes) del transcrito de ARN."
            },
            {
                pregunta: "12) La adición de una 'cola de Poli-A' al extremo 3' de un ARNm eucariota tiene como función principal:",
                opciones: ["Iniciar la transcripción.", "Servir como señal para la eliminación de intrones.", "Aumentar la estabilidad del ARNm y facilitar su transporte fuera del núcleo.", "Unir el ARNm al ribosoma."],
                respuestaCorrecta: "Aumentar la estabilidad del ARNm y facilitar su transporte fuera del núcleo."
            },
            {
                pregunta: "13) La enzima telomerasa es crucial en las células eucariotas para:",
                opciones: ["Iniciar la replicación en los orígenes.", "Unir los fragmentos de Okazaki.", "Aliviar la tensión del superenrollamiento del ADN.", "Evitar el acortamiento de los cromosomas en cada ciclo de replicación, agregando secuencias repetitivas en los extremos (telómeros)."],
                respuestaCorrecta: "Evitar el acortamiento de los cromosomas en cada ciclo de replicación, agregando secuencias repetitivas en los extremos (telómeros)."
            },
            {
                pregunta: "14) ¿Qué función cumplen la ADN helicasa y las proteínas SSB (proteínas de unión a hebra simple) durante la replicación?",
                opciones: ["La helicasa une fragmentos de ADN y las SSB sintetizan cebadores.", "La helicasa sintetiza la nueva hebra y las SSB la estabilizan.", "La helicasa separa las hebras de ADN y las SSB evitan que se vuelvan a unir.", "Ambas se encargan de corregir errores en la replicación."],
                respuestaCorrecta: "La helicasa separa las hebras de ADN y las SSB evitan que se vuelvan a unir."
            },
            {
                pregunta: "15) La hebra adelantada (continua) durante la replicación requiere ______, mientras que la hebra rezagada (discontinua) requiere ______.",
                opciones: ["muchos cebadores de ARN; un solo cebador de ARN.", "un solo cebador de ARN; muchos cebadores de ARN.", "solo ADN polimerasa; solo ARN polimerasa.", "telomerasa; primasa."],
                respuestaCorrecta: "un solo cebador de ARN; muchos cebadores de ARN."
            },
            {
                pregunta: "16) En la transcripción en eucariotas, los factores de transcripción son necesarios para:",
                opciones: ["Eliminar los intrones del ARN.", "Ayudar a la ARN polimerasa a reconocer y unirse al promotor para iniciar el proceso.", "Transportar el ARNm maduro al citoplasma.", "Finalizar la transcripción en la secuencia terminadora."],
                respuestaCorrecta: "Ayudar a la ARN polimerasa a reconocer y unirse al promotor para iniciar el proceso."
            },
            {
                pregunta: "17) ¿Qué determina qué hebra de la doble hélice de ADN se utilizará como molde para la transcripción de un gen específico?",
                opciones: ["Es siempre la misma hebra para todos los genes.", "La orientación del promotor del gen.", "Se elige al azar en cada transcripción.", "La presencia de la enzima telomerasa."],
                respuestaCorrecta: "La orientación del promotor del gen."
            },
            {
                pregunta: "18) La adición del capuchón 5' (5' cap) al ARNm eucariota consiste en:",
                opciones: ["Una larga secuencia de nucleótidos de adenina.", "La eliminación del primer nucleótido del ARN.", "La adición de un nucleótido modificado de Guanina que protege al transcrito.", "La unión de una proteína específica que inicia la traducción."],
                respuestaCorrecta: "La adición de un nucleótido modificado de Guanina que protege al transcrito."
            },
            {
                pregunta: "19) La enzima ADN ligasa es fundamental en la replicación para:",
                opciones: ["Sintetizar los cebadores de ARN.", "Separar la doble hélice de ADN.", "Unir los fragmentos de Okazaki en la hebra rezagada, formando un enlace fosfodiéster.", "Añadir nuevos desoxirribonucleótidos a la cadena en crecimiento."],
                respuestaCorrecta: "Unir los fragmentos de Okazaki en la hebra rezagada, formando un enlace fosfodiéster."
            },
            {
                pregunta: "20) ¿Por qué es posible sintetizar muchas copias de ARN a partir de un mismo gen en un tiempo relativamente corto?",
                opciones: ["Porque el gen se replica antes de cada transcripción.", "Porque múltiples ARN polimerasas pueden transcribir el mismo gen simultáneamente.", "Porque el ARN transcrito es muy estable y dura mucho tiempo en la célula.", "Porque la transcripción es un proceso instantáneo."],
                respuestaCorrecta: "Porque múltiples ARN polimerasas pueden transcribir el mismo gen simultáneamente."
            }

        ]
    },
    bio9: {
        nombre: "Quiz Temario - 8",
        preguntas: [
            {
                pregunta: "1) ¿Qué es la traducción y dónde ocurre en las células eucariotas?",
                opciones: ["La síntesis de ADN, que ocurre en el núcleo.", "La síntesis de proteínas a partir de un molde de ARNm, que ocurre en el citoplasma.", "El procesamiento del ARN, que ocurre en el citosol.", "La duplicación del material genético, que ocurre en los ribosomas."],
                respuestaCorrecta: "La síntesis de proteínas a partir de un molde de ARNm, que ocurre en el citoplasma."
            },
            {
                pregunta: "2) ¿Cuál es la función del ARN de transferencia (ARNt) en la traducción?",
                opciones: ["Transportar la información genética desde el núcleo al citoplasma.", "Formar la estructura principal del ribosoma.", "Actuar como una molécula adaptadora que reconoce un codón en el ARNm y lleva el aminoácido correspondiente.", "Catalizar la formación del enlace peptídico."],
                respuestaCorrecta: "Actuar como una molécula adaptadora que reconoce un codón en el ARNm y lleva el aminoácido correspondiente."
            },
            {
                pregunta: "3) El código genético se considera 'redundante' o 'degenerado' porque:",
                opciones: ["Cada codón puede codificar para varios aminoácidos diferentes.", "Algunos aminoácidos pueden ser codificados por más de un codón (triplete de nucleótidos).", "No todos los codones tienen un significado.", "El código es diferente en cada especie."],
                respuestaCorrecta: "Algunos aminoácidos pueden ser codificados por más de un codón (triplete de nucleótidos)."
            },
            {
                pregunta: "4) La maquinaria celular encargada de la síntesis de proteínas, que acopla el ARNm con los ARNt, es el:",
                opciones: ["Núcleo.", "Proteosoma.", "Ribosoma.", "Complejo de Golgi."],
                respuestaCorrecta: "Ribosoma."
            },
            {
                pregunta: "5) ¿Cuál es la función de las enzimas aminoacil-tRNA sintetasas?",
                opciones: ["Unir los aminoácidos para formar la cadena polipeptídica.", "Cargar o unir covalentemente el aminoácido correcto a su molécula de ARNt correspondiente, utilizando ATP.", "Iniciar el proceso de transcripción en el núcleo.", "Degradar las proteínas mal plegadas."],
                respuestaCorrecta: "Cargar o unir covalentemente el aminoácido correcto a su molécula de ARNt correspondiente, utilizando ATP."
            },
            {
                pregunta: "6) La traducción de un ARNm comienza siempre con el codón de inicio AUG, que codifica para el aminoácido:",
                opciones: ["Glicina.", "Alanina.", "Prolina.", "Metionina."],
                respuestaCorrecta: "Metionina."
            },
            {
                pregunta: "7) Un anticodón es una secuencia de tres nucleótidos que se encuentra en:",
                opciones: ["El ADN.", "El ARN mensajero (ARNm).", "El ARN de transferencia (ARNt) y es complementario a un codón del ARNm.", "El ARN ribosomal (ARNr)."],
                respuestaCorrecta: "El ARN de transferencia (ARNt) y es complementario a un codón del ARNm."
            },
            {
                pregunta: "8) ¿Cómo finaliza el proceso de traducción?",
                opciones: ["Cuando el ribosoma llega al final de la molécula de ARNm.", "Cuando se agotan los aminoácidos en el citoplasma.", "Cuando un codón de término (UAA, UAG o UGA) es reconocido por un factor de liberación en el sitio A del ribosoma.", "Cuando la proteína recién formada se pliega."],
                respuestaCorrecta: "Cuando un codón de término (UAA, UAG o UGA) es reconocido por un factor de liberación en el sitio A del ribosoma."
            },
            {
                pregunta: "9) La expresión diferencial de genes es el mecanismo que explica por qué:",
                opciones: ["Todas las células de un organismo son idénticas.", "Células de diferentes tejidos (como una neurona y una célula de la piel) tienen funciones y características distintas a pesar de tener el mismo ADN.", "El código genético es universal.", "El ADN se replica de forma semiconservativa."],
                respuestaCorrecta: "Células de diferentes tejidos (como una neurona y una célula de la piel) tienen funciones y características distintas a pesar de tener el mismo ADN."
            },
            {
                pregunta: "10) ¿Qué son los proteosomas y cuál es su función principal?",
                opciones: ["Organelos que sintetizan proteínas.", "Complejos proteicos que degradan selectivamente proteínas mal plegadas, dañadas o que ya no son necesarias.", "Estructuras que transportan ARNm fuera del núcleo.", "Enzimas que realizan el splicing del ARN."],
                respuestaCorrecta: "Complejos proteicos que degradan selectivamente proteínas mal plegadas, dañadas o que ya no son necesarias."
            },
            {
                pregunta: "11) En eucariotas, antes de que un ARNm pueda ser traducido, debe:",
                opciones: ["Ser procesado (capping, splicing, poliadenilación) y exportado del núcleo al citosol.", "Replicarse varias veces.", "Unirse al ADN para ser verificado.", "Ser cortado en pequeños fragmentos."],
                respuestaCorrecta: "Ser procesado (capping, splicing, poliadenilación) y exportado del núcleo al citosol."
            },
            {
                pregunta: "12) Los ribosomas están compuestos por:",
                opciones: ["Solamente proteínas.", "ADN y proteínas.", "ARN ribosomal (ARNr) y proteínas.", "Fosfolípidos y ARN."],
                respuestaCorrecta: "ARN ribosomal (ARNr) y proteínas."
            },
            {
                pregunta: "13) Durante el ciclo de elongación en el ribosoma, ¿en qué sitio se une el nuevo aminoacil-ARNt cargado?",
                opciones: ["En el sitio E (Exit).", "En el sitio P (Peptidil).", "En el sitio A (Aminoacil).", "Directamente sobre el codón de inicio."],
                respuestaCorrecta: "En el sitio A (Aminoacil)."
            },
            {
                pregunta: "14) ¿Cuál es la diferencia entre un polipéptido naciente y una proteína madura?",
                opciones: ["No hay diferencia, son lo mismo.", "El polipéptido naciente es la cadena lineal de aminoácidos que sale del ribosoma, mientras que la proteína madura ha sido plegada en su estructura tridimensional funcional.", "El polipéptido naciente se encuentra en el núcleo y la proteína madura en el citoplasma.", "La proteína madura tiene intrones y el polipéptido no."],
                respuestaCorrecta: "El polipéptido naciente es la cadena lineal de aminoácidos que sale del ribosoma, mientras que la proteína madura ha sido plegada en su estructura tridimensional funcional."
            },
            {
                pregunta: "15) La regulación de la expresión génica en eucariotas puede ocurrir en la etapa de:",
                opciones: ["Solo durante la replicación del ADN.", "Únicamente en el momento de la traducción.", "En múltiples niveles, incluyendo el control transcripcional, el procesamiento del ARN, el control traduccional y la actividad de la proteína.", "Exclusivamente a través de la degradación de proteínas."],
                respuestaCorrecta: "En múltiples niveles, incluyendo el control transcripcional, el procesamiento del ARN, el control traduccional y la actividad de la proteína."
            },
            {
                pregunta: "16) En las células procariotas, la transcripción y la traducción pueden ocurrir simultáneamente porque:",
                opciones: ["Tienen ribosomas más eficientes.", "Su ADN es circular.", "No poseen un núcleo que separe el ADN (en el citosol) de los ribosomas.", "Sus genes no tienen promotores."],
                respuestaCorrecta: "No poseen un núcleo que separe el ADN (en el citosol) de los ribosomas."
            },
            {
                pregunta: "17) Los factores de iniciación de la traducción son:",
                opciones: ["Los codones de inicio en el ARNm.", "Proteínas accesorias que ayudan a ensamblar el ribosoma y a posicionar el primer ARNt sobre el codón de inicio.", "Los propios ribosomas.", "Secuencias en el ARNt."],
                respuestaCorrecta: "Proteínas accesorias que ayudan a ensamblar el ribosoma y a posicionar el primer ARNt sobre el codón de inicio."
            },
            {
                pregunta: "18) Los microARN (miARN) son un ejemplo de regulación génica que actúa principalmente a nivel de:",
                opciones: ["Modificación de histonas y cromatina.", "Control de la traducción, uniéndose a moléculas de ARNm y marcándolas para su degradación o impidiendo su traducción.", "Inicio de la replicación del ADN.", "Activación de la transcripción."],
                respuestaCorrecta: "Control de la traducción, uniéndose a moléculas de ARNm y marcándolas para su degradación o impidiendo su traducción."
            },
            {
                pregunta: "19) ¿Qué ocurre con las subunidades del ribosoma una vez que se completa la síntesis de una proteína?",
                opciones: ["Permanecen unidas al ARNm.", "Son degradadas por los proteosomas.", "Se desensamblan y pueden ser reutilizadas para otra ronda de traducción.", "Se exportan fuera de la célula."],
                respuestaCorrecta: "Se desensamblan y pueden ser reutilizadas para otra ronda de traducción."
            },
            {
                pregunta: "20) La afirmación 'el código genético es universal' implica que:",
                opciones: ["Todos los organismos tienen exactamente los mismos genes.", "Un codón como AUG especifica el mismo aminoácido (Metionina) en casi todos los organismos, desde bacterias hasta humanos.", "Solo los eucariotas comparten el mismo código genético.", "Cada especie tiene un código genético único."],
                respuestaCorrecta: "Un codón como AUG especifica el mismo aminoácido (Metionina) en casi todos los organismos, desde bacterias hasta humanos."
            }

        ]
    },
    bio10: {
        nombre: "Quiz Temario - 9",
        preguntas: [
            {
                pregunta: "1) ¿Cuál es una de las funciones principales del citoesqueleto?",
                opciones: ["Almacenar la información genética de la célula.", "Sintetizar lípidos y hormonas esteroidales.", "Proporcionar soporte estructural, determinar la forma celular y participar en el movimiento y la división celular.", "Digerir los desechos celulares."],
                respuestaCorrecta: "Proporcionar soporte estructural, determinar la forma celular y participar en el movimiento y la división celular."
            },
            {
                pregunta: "2) Los microtúbulos, componentes clave del citoesqueleto, están formados por la polimerización de:",
                opciones: ["Filamentos de actina.", "Proteínas de queratina.", "Dímeros de α-tubulina y β-tubulina.", "Moléculas de miosina."],
                respuestaCorrecta: "Dímeros de α-tubulina y β-tubulina."
            },
            {
                pregunta: "3) ¿Qué es el sistema endomembranoso?",
                opciones: ["El conjunto de todas las membranas de la célula, incluyendo mitocondrias y cloroplastos.", "Un grupo de membranas y organelos (como el RE, Golgi y lisosomas) que trabajan juntos para modificar, empacar y transportar lípidos y proteínas.", "Únicamente la membrana plasmática.", "La red de filamentos que componen el citoesqueleto."],
                respuestaCorrecta: "Un grupo de membranas y organelos (como el RE, Golgi y lisosomas) que trabajan juntos para modificar, empacar y transportar lípidos y proteínas."
            },
            {
                pregunta: "4) El transporte co-traduccional se refiere al proceso en el que:",
                opciones: ["Las proteínas son transportadas a su destino final después de haber sido completamente sintetizadas en el citosol.", "Las proteínas son internalizadas en el Retículo Endoplasmático (RE) a medida que están siendo sintetizadas en los ribosomas.", "Las vesículas se mueven a lo largo de los microtúbulos.", "Los lípidos son sintetizados y transportados al mismo tiempo."],
                respuestaCorrecta: "Las proteínas son internalizadas en el Retículo Endoplasmático (RE) a medida que están siendo sintetizadas en los ribosomas."
            },
            {
                pregunta: "5) ¿Qué dirige a una proteína naciente hacia el Retículo Endoplasmático Rugoso (RER) para su translocación?",
                opciones: ["Una secuencia de azúcares añadida a la proteína.", "La ausencia de un codón de inicio.", "Una secuencia señal específica, usualmente en el extremo N-terminal, que es reconocida por una partícula de reconocimiento de señal (SRP).", "La carga eléctrica total de la proteína."],
                respuestaCorrecta: "Una secuencia señal específica, usualmente en el extremo N-terminal, que es reconocida por una partícula de reconocimiento de señal (SRP)."
            },
            {
                pregunta: "6) Las proteínas destinadas al núcleo, mitocondrias, cloroplastos y peroxisomas son transportadas mediante un mecanismo:",
                opciones: ["Co-traduccional, a través del sistema endomembranoso.", "Post-traduccional, donde son sintetizadas completamente en el citosol y luego importadas al organelo correspondiente.", "De exocitosis regulada.", "Que no requiere secuencias señal."],
                respuestaCorrecta: "Post-traduccional, donde son sintetizadas completamente en el citosol y luego importadas al organelo correspondiente."
            },
            {
                pregunta: "7) ¿Cuál es la función principal del Aparato de Golgi?",
                opciones: ["La síntesis de ATP.", "La degradación de proteínas dañadas.", "La modificación (ej. glicosilación), clasificación y empaquetamiento de lípidos y proteínas provenientes del RE en vesículas de transporte.", "La replicación del ADN."],
                respuestaCorrecta: "La modificación (ej. glicosilación), clasificación y empaquetamiento de lípidos y proteínas provenientes del RE en vesículas de transporte."
            },
            {
                pregunta: "8) La exocitosis es el proceso por el cual una célula:",
                opciones: ["Incorpora partículas grandes desde el exterior.", "Libera macromoléculas al exterior mediante la fusión de vesículas secretoras con la membrana plasmática.", "Digiere sus propios organelos.", "Transporta proteínas hacia el núcleo."],
                respuestaCorrecta: "Libera macromoléculas al exterior mediante la fusión de vesículas secretoras con la membrana plasmática."
            },
            {
                pregunta: "9) ¿Qué es la fagocitosis?",
                opciones: ["La ingestión de líquido y pequeños solutos disueltos.", "Un tipo de endocitosis que implica la ingestión de partículas grandes, como bacterias o restos celulares.", "La secreción de hormonas.", "El movimiento de vesículas dentro de la célula."],
                respuestaCorrecta: "Un tipo de endocitosis que implica la ingestión de partículas grandes, como bacterias o restos celulares."
            },
            {
                pregunta: "10) La endocitosis mediada por receptor se diferencia de la pinocitosis en que:",
                opciones: ["Es un proceso que no requiere energía.", "Incorpora grandes cantidades de líquido de forma inespecífica.", "Permite la incorporación selectiva de moléculas específicas que se unen a receptores en la superficie celular.", "Solo ocurre en células vegetales."],
                respuestaCorrecta: "Permite la incorporación selectiva de moléculas específicas que se unen a receptores en la superficie celular."
            },
            {
                pregunta: "11) Las proteínas de recubrimiento como la clatrina y la caveolina participan en la endocitosis para:",
                opciones: ["Digerir el contenido de la vesícula.", "Ayudar a formar la invaginación de la membrana y modelar la vesícula que se está formando.", "Transportar la vesícula a lo largo de los microtúbulos.", "Reconocer la señal de destino de la vesícula."],
                respuestaCorrecta: "Ayudar a formar la invaginación de la membrana y modelar la vesícula que se está formando."
            },
            {
                pregunta: "12) Las proteínas solubles que son completamente translocadas al lumen del RER están generalmente destinadas a:",
                opciones: ["Permanecer en el citosol.", "Ser secretadas fuera de la célula o dirigirse al lumen de otro organelo del sistema endomembranoso (como Golgi o lisosomas).", "Ser insertadas en la membrana del RER.", "Ser transportadas al núcleo."],
                respuestaCorrecta: "Ser secretadas fuera de la célula o dirigirse al lumen de otro organelo del sistema endomembranoso (como Golgi o lisosomas)."
            },
            {
                pregunta: "13) Las proteínas transmembrana se caracterizan porque:",
                opciones: ["Son completamente solubles en el citosol.", "Se degradan inmediatamente después de su síntesis.", "Quedan permanentemente embebidas o ancladas en una membrana lipídica.", "Solo funcionan fuera de la célula."],
                respuestaCorrecta: "Quedan permanentemente embebidas o ancladas en una membrana lipídica."
            },
            {
                pregunta: "14) El transporte lisosomal es crucial para:",
                opciones: ["La síntesis de nuevas proteínas.", "La degradación y reciclaje de macromoléculas, organelos dañados y material endocitado.", "La producción de energía.", "La comunicación celular."],
                respuestaCorrecta: "La degradación y reciclaje de macromoléculas, organelos dañados y material endocitado."
            },
            {
                pregunta: "15) ¿Qué tipo de citoesqueleto está principalmente asociado al movimiento celular, como la contracción muscular y la formación de proyecciones como los pseudópodos?",
                opciones: ["Los microtúbulos.", "Los filamentos intermedios.", "Los microfilamentos (filamentos de actina).", "Los centríolos."],
                respuestaCorrecta: "Los microfilamentos (filamentos de actina)."
            },
            {
                pregunta: "16) La exocitosis constitutiva se diferencia de la exocitosis regulada en que:",
                opciones: ["La constitutiva requiere una señal externa para ocurrir, mientras que la regulada es constante.", "La constitutiva es un proceso continuo y no requiere una señal específica, mientras que la regulada sí necesita una señal para la fusión de la vesícula.", "La constitutiva solo secreta lípidos y la regulada solo proteínas.", "La constitutiva ocurre en todas las células, pero la regulada no existe."],
                respuestaCorrecta: "La constitutiva es un proceso continuo y no requiere una señal específica, mientras que la regulada sí necesita una señal para la fusión de la vesícula."
            },
            {
                pregunta: "17) Las proteínas motoras como la kinesina y la dineína 'caminan' sobre _______ para transportar vesículas y organelos.",
                opciones: ["la membrana plasmática.", "los filamentos intermedios.", "los microtúbulos.", "los filamentos de actina."],
                respuestaCorrecta: "los microtúbulos."
            },
            {
                pregunta: "18) Las proteínas que no poseen una secuencia señal para el RER:",
                opciones: ["Son degradadas inmediatamente.", "Completan su síntesis en ribosomas libres en el citosol y pueden permanecer allí o ser dirigidas a otros organelos como mitocondrias o el núcleo.", "Son siempre proteínas de membrana.", "Se transportan al Golgi directamente desde el citosol."],
                respuestaCorrecta: "Completan su síntesis en ribosomas libres en el citosol y pueden permanecer allí o ser dirigidas a otros organelos como mitocondrias o el núcleo."
            },
            {
                pregunta: "19) La función principal del Retículo Endoplasmático Liso (REL) incluye:",
                opciones: ["La síntesis de proteínas de secreción.", "La síntesis de lípidos, el almacenamiento de calcio y la detoxificación de drogas.", "El procesamiento de ARNm.", "La digestión celular."],
                respuestaCorrecta: "La síntesis de lípidos, el almacenamiento de calcio y la detoxificación de drogas."
            },
            {
                pregunta: "20) Los endosomas son organelos que funcionan como:",
                opciones: ["El sitio principal de síntesis de ATP.", "'Estaciones de clasificación' para el material que ingresa a la célula por endocitosis, distribuyéndolo a diferentes destinos como los lisosomas o reciclándolo a la membrana plasmática.", "El lugar de replicación del ADN.", "Centros de organización de microtúbulos."],
                respuestaCorrecta: "'Estaciones de clasificación' para el material que ingresa a la célula por endocitosis, distribuyéndolo a diferentes destinos como los lisosomas o reciclándolo a la membrana plasmática."
            },
            {
                pregunta: "21) La pinocitosis es un proceso de endocitosis que implica:",
                opciones: ["La ingestión de partículas sólidas grandes.", "La unión específica de ligandos a receptores.", "La ingestión de líquido extracelular y solutos disueltos en pequeñas vesículas.", "La secreción de hormonas."],
                respuestaCorrecta: "La ingestión de líquido extracelular y solutos disueltos en pequeñas vesículas."
            },
            {
                pregunta: "22) ¿Qué son las chaperonas en el contexto del RER?",
                opciones: ["Proteínas que marcan el destino final de las vesículas.", "Enzimas que glicosilan las proteínas.", "Proteínas que ayudan al correcto plegamiento de las proteínas recién sintetizadas y detectan las que están mal plegadas.", "Proteínas que forman los poros de la membrana del RER."],
                respuestaCorrecta: "Proteínas que ayudan al correcto plegamiento de las proteínas recién sintetizadas y detectan las que están mal plegadas."
            },
            {
                pregunta: "23) El centrosoma en las células animales actúa como:",
                opciones: ["El centro de digestión celular.", "El principal centro organizador de microtúbulos.", "El lugar de síntesis de lípidos.", "Una barrera protectora para el núcleo."],
                respuestaCorrecta: "El principal centro organizador de microtúbulos."
            },
            {
                pregunta: "24) ¿Cuál es la función principal de los filamentos intermedios?",
                opciones: ["Proporcionar 'carreteras' para el transporte de vesículas.", "Permitir el movimiento y la contracción celular.", "Brindar resistencia mecánica y mantener la forma de la célula y sus organelos, como el núcleo.", "Participar en la división celular separando los cromosomas."],
                respuestaCorrecta: "Brindar resistencia mecánica y mantener la forma de la célula y sus organelos, como el núcleo."
            },
            {
                pregunta: "25) En el ejemplo de la captación de LDL, ¿cuál es el destino final del colesterol una vez que la vesícula se fusiona con el lisosoma?",
                opciones: ["Es secretado fuera de la célula.", "Se degrada completamente y se elimina como desecho.", "Es liberado al citosol para ser utilizado por la célula.", "Se incorpora a la membrana del lisosoma."],
                respuestaCorrecta: "Es liberado al citosol para ser utilizado por la célula."
            }

        ]
    },
    bio11: {
        nombre: "Quiz Temario - 10",
        preguntas: [
            {
                pregunta: "1) ¿Cuál es la función principal de las mitocondrias en las células eucariotas?",
                opciones: ["Sintetizar proteínas para la secreción.", "Llevar a cabo la fotosíntesis.", "Generar la mayor parte del ATP de la célula a través de la respiración celular.", "Almacenar material genético."],
                respuestaCorrecta: "Generar la mayor parte del ATP de la célula a través de la respiración celular."
            },
            {
                pregunta: "2) Una reacción exergónica es aquella que:",
                opciones: ["Requiere un aporte neto de energía para ocurrir (ΔG > 0).", "Libera energía neta (ΔG < 0) y ocurre espontáneamente.", "No implica cambios en la energía libre.", "Solo ocurre en ausencia de oxígeno."],
                respuestaCorrecta: "Libera energía neta (ΔG < 0) y ocurre espontáneamente."
            },
            {
                pregunta: "3) El proceso metabólico inicial que descompone la glucosa en dos moléculas de piruvato se llama:",
                opciones: ["Ciclo de Krebs.", "Fosforilación oxidativa.", "Glucólisis.", "Fotosíntesis."],
                respuestaCorrecta: "Glucólisis."
            },
            {
                pregunta: "4) ¿Dónde ocurre la glucólisis en la célula?",
                opciones: ["En la matriz mitocondrial.", "En el citosol.", "En la membrana interna de la mitocondria.", "En el interior de los cloroplastos."],
                respuestaCorrecta: "En el citosol."
            },
            {
                pregunta: "5) El Ciclo de Krebs (o del ácido cítrico) ocurre en la matriz mitocondrial y su función principal es:",
                opciones: ["Sintetizar glucosa.", "Completar la oxidación de los derivados del piruvato, generando NADH, FADH₂ y ATP.", "Utilizar la luz solar para producir energía.", "Bombear protones a través de la membrana."],
                respuestaCorrecta: "Completar la oxidación de los derivados del piruvato, generando NADH, FADH₂ y ATP."
            },
            {
                pregunta: "6) La cadena transportadora de electrones en la mitocondria está ubicada en:",
                opciones: ["La membrana externa.", "El citosol.", "La membrana interna (crestas mitocondriales).", "La matriz mitocondrial."],
                respuestaCorrecta: "La membrana interna (crestas mitocondriales)."
            },
            {
                pregunta: "7) El flujo de electrones a través de la cadena transportadora mitocondrial resulta directamente en:",
                opciones: ["La producción de oxígeno.", "El bombeo de protones (H⁺) desde la matriz al espacio intermembrana, creando un gradiente electroquímico.", "La síntesis directa de glucosa.", "La reducción de NAD⁺ a NADH."],
                respuestaCorrecta: "El bombeo de protones (H⁺) desde la matriz al espacio intermembrana, creando un gradiente electroquímico."
            },
            {
                pregunta: "8) La enzima ATP sintasa utiliza la energía del gradiente de protones para:",
                opciones: ["Oxidar la glucosa.", "Sintetizar ATP a partir de ADP y fosfato inorgánico (Pᵢ).", "Transportar electrones entre los complejos proteicos.", "Fijar dióxido de carbono."],
                respuestaCorrecta: "Sintetizar ATP a partir de ADP y fosfato inorgánico (Pᵢ)."
            },
            {
                pregunta: "9) ¿Qué organelo es el responsable de la fotosíntesis en las células vegetales?",
                opciones: ["La mitocondria.", "El cloroplasto.", "El núcleo.", "El retículo endoplasmático."],
                respuestaCorrecta: "El cloroplasto."
            },
            {
                pregunta: "10) La fase clara o lumínica de la fotosíntesis ocurre en los tilacoides y su propósito es:",
                opciones: ["Sintetizar glucosa utilizando CO₂.", "Capturar la energía lumínica para producir ATP y NADPH.", "Romper moléculas de glucosa.", "Liberar dióxido de carbono."],
                respuestaCorrecta: "Capturar la energía lumínica para producir ATP y NADPH."
            },
            {
                pregunta: "11) Las reacciones de fijación de carbono (fase oscura o Ciclo de Calvin) ocurren en:",
                opciones: ["La membrana del tilacoide.", "El citosol.", "El estroma del cloroplasto.", "El espacio intermembrana del cloroplasto."],
                respuestaCorrecta: "El estroma del cloroplasto."
            },
            {
                pregunta: "12) ¿Qué productos de la fase clara son esenciales para que ocurra el Ciclo de Calvin?",
                opciones: ["Oxígeno y glucosa.", "Agua y dióxido de carbono.", "ATP y NADPH.", "Luz y clorofila."],
                respuestaCorrecta: "ATP y NADPH."
            },
            {
                pregunta: "13) La enzima RuBisCO es fundamental en la fotosíntesis porque:",
                opciones: ["Captura la energía de la luz.", "Cataliza la primera reacción del Ciclo de Calvin, fijando el CO₂ a la molécula de ribulosa bifosfato (RuBP).", "Sintetiza ATP.", "Rompe la molécula de agua."],
                respuestaCorrecta: "Cataliza la primera reacción del Ciclo de Calvin, fijando el CO₂ a la molécula de ribulosa bifosfato (RuBP)."
            },
            {
                pregunta: "14) El transporte de proteínas codificadas en el núcleo hacia las mitocondrias es un proceso:",
                opciones: ["Co-traduccional.", "Post-traduccional, que depende de secuencias señal y complejos de translocación como TOM y TIM.", "Que ocurre a través de vesículas del aparato de Golgi.", "Que no requiere energía."],
                respuestaCorrecta: "Post-traduccional, que depende de secuencias señal y complejos de translocación como TOM y TIM."
            },
            {
                pregunta: "15) Las reacciones anabólicas, como la síntesis de macromoléculas, son típicamente:",
                opciones: ["Exergónicas (liberan energía).", "Endergónicas (requieren energía).", "Espontáneas.", "Reacciones de degradación."],
                respuestaCorrecta: "Endergónicas (requieren energía)."
            },
            {
                pregunta: "16) ¿Qué son los fotosistemas?",
                opciones: ["Moléculas de ATP y NADPH.", "Complejos de proteínas y pigmentos (como la clorofila) en la membrana tilacoidal que capturan la energía lumínica.", "Enzimas del Ciclo de Calvin.", "Poros en la membrana del cloroplasto."],
                respuestaCorrecta: "Complejos de proteínas y pigmentos (como la clorofila) en la membrana tilacoidal que capturan la energía lumínica."
            },
            {
                pregunta: "17) En la fermentación láctica, el piruvato se convierte en lactato para:",
                opciones: ["Producir más ATP.", "Regenerar NAD⁺ a partir de NADH, permitiendo que la glucólisis continúe en ausencia de oxígeno.", "Sintetizar glucosa.", "Eliminar el dióxido de carbono de la célula."],
                respuestaCorrecta: "Regenerar NAD⁺ a partir de NADH, permitiendo que la glucólisis continúe en ausencia de oxígeno."
            },
            {
                pregunta: "18) ¿Cuál es el aceptor final de electrones en la cadena transportadora de electrones de la respiración celular aeróbica?",
                opciones: ["El NAD⁺.", "El agua.", "El oxígeno (O₂).", "El piruvato."],
                respuestaCorrecta: "El oxígeno (O₂)."
            },
            {
                pregunta: "19) ¿Qué papel cumplen las proteínas chaperonas durante la importación de proteínas a la mitocondria?",
                opciones: ["Sintetizan la secuencia señal.", "Ayudan a mantener la proteína en un estado desplegado para que pueda pasar a través de los canales de translocación.", "Transportan ATP a la mitocondria.", "Forman parte del complejo TOM."],
                respuestaCorrecta: "Ayudan a mantener la proteína en un estado desplegado para que pueda pasar a través de los canales de translocación."
            },
            {
                pregunta: "20) La teoría endosimbiótica propone que las mitocondrias y los cloroplastos se originaron a partir de:",
                opciones: ["Invaginaciones de la membrana plasmática.", "La fusión de dos células eucariotas.", "Bacterias que fueron engullidas por una célula huésped ancestral y establecieron una relación simbiótica.", "La evolución directa de los peroxisomas."],
                respuestaCorrecta: "Bacterias que fueron engullidas por una célula huésped ancestral y establecieron una relación simbiótica."
            },
            {
                pregunta: "21) El producto neto de una vuelta del Ciclo de Calvin que sale del ciclo para ser utilizado en la síntesis de azúcares es:",
                opciones: ["Glucosa.", "Ribulosa bifosfato (RuBP).", "Gliceraldehído 3-fosfato (G3P).", "ATP."],
                respuestaCorrecta: "Gliceraldehído 3-fosfato (G3P)."
            },
            {
                pregunta: "22) La fuerza protón-motriz que impulsa la síntesis de ATP en la mitocondria es generada por:",
                opciones: ["La diferencia de pH y el potencial de membrana a través de la membrana interna.", "El movimiento de sodio a través de la membrana.", "La hidrólisis directa del ATP.", "El transporte de glucosa."],
                respuestaCorrecta: "La diferencia de pH y el potencial de membrana a través de la membrana interna."
            },
            {
                pregunta: "23) ¿Cuál es el destino de las moléculas de piruvato en condiciones aeróbicas?",
                opciones: ["Se convierten en etanol o lactato.", "Son transportadas a la matriz mitocondrial, donde se convierten en Acetil-CoA para entrar al Ciclo de Krebs.", "Se utilizan directamente en la cadena transportadora de electrones.", "Se excretan fuera de la célula."],
                respuestaCorrecta: "Son transportadas a la matriz mitocondrial, donde se convierten en Acetil-CoA para entrar al Ciclo de Krebs."
            },
            {
                pregunta: "24) En la fotosíntesis, la fotólisis del agua (la ruptura de la molécula de H₂O) ocurre en la fase clara y produce:",
                opciones: ["Dióxido de carbono, ATP y NADPH.", "Glucosa y oxígeno.", "Electrones, protones (H⁺) y oxígeno (O₂).", "Únicamente ATP."],
                respuestaCorrecta: "Electrones, protones (H⁺) y oxígeno (O₂)."
            },
            {
                pregunta: "25) El catabolismo se refiere a las rutas metabólicas que _______, mientras que el anabolismo se refiere a las que _______.",
                opciones: ["requieren energía; liberan energía.", "construyen moléculas; degradan moléculas.", "degradan macromoléculas liberando energía; sintetizan moléculas complejas requiriendo energía.", "ocurren en el citosol; ocurren en la mitocondria."],
                respuestaCorrecta: "degradan macromoléculas liberando energía; sintetizan moléculas complejas requiriendo energía."
            }

        ]
    },
    bio12: {
        nombre: "Quiz Temario - 11",
        preguntas: [
            {
                pregunta: "1) ¿Cuál de los siguientes es un mecanismo general de comunicación celular?",
                opciones: ["Por difusión simple de todas las moléculas.", "A través de la replicación del ADN.", "Mediante la secreción de moléculas señalizadoras (ligandos) o por contacto directo.", "Únicamente por transporte activo de iones."],
                respuestaCorrecta: "Mediante la secreción de moléculas señalizadoras (ligandos) o por contacto directo."
            },
            {
                pregunta: "2) En la comunicación celular, un ligando es:",
                opciones: ["El organelo que produce la energía para la célula.", "Una molécula señalizadora que se une a un receptor específico.", "El canal por el que pasan los iones.", "Una proteína que degrada otras proteínas."],
                respuestaCorrecta: "Una molécula señalizadora que se une a un receptor específico."
            },
            {
                pregunta: "3) La señalización endocrina se caracteriza porque:",
                opciones: ["La molécula señal (hormona) viaja a través del torrente sanguíneo para actuar sobre células diana distantes.", "La célula señal actúa sobre células vecinas.", "La célula se envía señales a sí misma.", "Requiere contacto físico directo entre las células."],
                respuestaCorrecta: "La molécula señal (hormona) viaja a través del torrente sanguíneo para actuar sobre células diana distantes."
            },
            {
                pregunta: "4) ¿Cuál es la principal diferencia entre los receptores de superficie celular y los receptores intracelulares?",
                opciones: ["Los receptores de superficie son proteínas y los intracelulares son lípidos.", "Los receptores de superficie se unen a ligandos hidrofóbicos, mientras que los intracelulares se unen a ligandos hidrofílicos.", "Los de superficie se unen a ligandos que no pueden cruzar la membrana, mientras que los intracelulares se unen a ligandos pequeños e hidrofóbicos que sí pueden cruzarla.", "No hay diferencias fundamentales entre ellos."],
                respuestaCorrecta: "Los de superficie se unen a ligandos que no pueden cruzar la membrana, mientras que los intracelulares se unen a ligandos pequeños e hidrofóbicos que sí pueden cruzarla."
            },
            {
                pregunta: "5) ¿Qué es la transducción de señales?",
                opciones: ["La síntesis de la molécula señal.", "El proceso de degradación del receptor.", "El proceso por el cual la unión de un ligando a un receptor convierte esta señal extracelular en una o más señales intracelulares que provocan una respuesta.", "El transporte del ligando al interior de la célula."],
                respuestaCorrecta: "El proceso por el cual la unión de un ligando a un receptor convierte esta señal extracelular en una o más señales intracelulares que provocan una respuesta."
            },
            {
                pregunta: "6) Los receptores acoplados a proteína G (GPCRs) son una gran familia de receptores de superficie que, al activarse:",
                opciones: ["Se convierten en una enzima.", "Permiten el paso directo de iones.", "Activan una proteína G, que a su vez activa o inhibe una enzima o un canal iónico en la membrana.", "Se transportan directamente al núcleo para regular genes."],
                respuestaCorrecta: "Activan una proteína G, que a su vez activa o inhibe una enzima o un canal iónico en la membrana."
            },
            {
                pregunta: "7) Los receptores tipo tirosina quinasa (RTKs) se activan típicamente mediante un mecanismo de:",
                opciones: ["Unión a GTP.", "Dimerización y autofosforilación cruzada tras la unión del ligando.", "Apertura de un canal iónico.", "Liberación de calcio desde el retículo endoplasmático."],
                respuestaCorrecta: "Dimerización y autofosforilación cruzada tras la unión del ligando."
            },
            {
                pregunta: "8) El AMP cíclico (cAMP), el calcio (Ca²⁺) y el diacilglicerol (DAG) son ejemplos de:",
                opciones: ["Ligandos primarios.", "Segundos mensajeros, moléculas pequeñas que se generan o liberan en el citosol para propagar la señal.", "Proteínas quinasas.", "Receptores de membrana."],
                respuestaCorrecta: "Segundos mensajeros, moléculas pequeñas que se generan o liberan en el citosol para propagar la señal."
            },
            {
                pregunta: "9) La enzima adenilato ciclasa es responsable de sintetizar:",
                opciones: ["ATP a partir de ADP.", "AMP cíclico (cAMP) a partir de ATP.", "Proteínas G.", "Fosfolípidos de membrana."],
                respuestaCorrecta: "AMP cíclico (cAMP) a partir de ATP."
            },
            {
                pregunta: "10) Una cascada de señalización intracelular, como la cascada de MAP quinasas, tiene como una de sus funciones principales:",
                opciones: ["Degradar la señal inicial.", "Transportar el receptor al interior de la célula.", "Amplificar la señal inicial, de modo que pocas moléculas señalizadoras extracelulares puedan provocar una gran respuesta celular.", "Limitar la respuesta a una sola proteína efectora."],
                respuestaCorrecta: "Amplificar la señal inicial, de modo que pocas moléculas señalizadoras extracelulares puedan provocar una gran respuesta celular."
            },
            {
                pregunta: "11) Las hormonas esteroideas, como el cortisol o la testosterona, ejercen su efecto uniéndose a:",
                opciones: ["Receptores acoplados a proteína G.", "Receptores intracelulares (receptores nucleares) que actúan como reguladores de la transcripción génica.", "Canales iónicos en la membrana plasmática.", "Receptores tirosina quinasa."],
                respuestaCorrecta: "Receptores intracelulares (receptores nucleares) que actúan como reguladores de la transcripción génica."
            },
            {
                pregunta: "12) La proteína quinasa A (PKA) es una enzima clave que se activa por la unión de:",
                opciones: ["Calcio (Ca²⁺).", "Diacilglicerol (DAG).", "AMP cíclico (cAMP).", "GTP."],
                respuestaCorrecta: "AMP cíclico (cAMP)."
            },
            {
                pregunta: "13) En la vía de señalización del fosfatidilinositol, la enzima fosfolipasa C produce dos segundos mensajeros:",
                opciones: ["cAMP y cGMP.", "Inositol 1,4,5-trisfosfato (IP₃) y diacilglicerol (DAG).", "Óxido nítrico y monóxido de carbono.", "ATP y GTP."],
                respuestaCorrecta: "Inositol 1,4,5-trisfosfato (IP₃) y diacilglicerol (DAG)."
            },
            {
                pregunta: "14) ¿Cuál es el rol principal del segundo mensajero IP₃?",
                opciones: ["Activar directamente a la proteína quinasa A.", "Unirse a canales de Ca²⁺ en la membrana del retículo endoplasmático, provocando la liberación de Ca²⁺ al citosol.", "Actuar como un factor de transcripción en el núcleo.", "Fosforilar a otras proteínas."],
                respuestaCorrecta: "Unirse a canales de Ca²⁺ en la membrana del retículo endoplasmático, provocando la liberación de Ca²⁺ al citosol."
            },
            {
                pregunta: "15) La proteína Ras es un ejemplo de:",
                opciones: ["Un receptor de superficie.", "Una proteína G monomérica que actúa como un interruptor molecular, activa cuando está unida a GTP e inactiva cuando está unida a GDP.", "Un segundo mensajero.", "Un canal iónico."],
                respuestaCorrecta: "Una proteína G monomérica que actúa como un interruptor molecular, activa cuando está unida a GTP e inactiva cuando está unida a GDP."
            },
            {
                pregunta: "16) La comunicación sináptica entre neuronas es un tipo de señalización:",
                opciones: ["Endocrina, porque viaja por la sangre.", "Paracrina, pero altamente especializada, rápida y de corto alcance a través de la sinapsis.", "Autocrina, porque la neurona se estimula a sí misma.", "Dependiente de contacto."],
                respuestaCorrecta: "Paracrina, pero altamente especializada, rápida y de corto alcance a través de la sinapsis."
            },
            {
                pregunta: "17) Las proteínas quinasas y las proteínas fosfatasas son componentes cruciales de las vías de señalización porque actúan como interruptores moleculares mediante:",
                opciones: ["La unión y liberación de calcio.", "La adición (quinasa) y remoción (fosfatasa) de grupos fosfato en otras proteínas.", "La síntesis y degradación de cAMP.", "La activación e inactivación de proteínas G."],
                respuestaCorrecta: "La adición (quinasa) y remoción (fosfatasa) de grupos fosfato en otras proteínas."
            },
            {
                pregunta: "18) Un ejemplo de ligando gaseoso que puede difundir a través de la membrana y activar directamente una enzima intracelular (guanilato ciclasa) es:",
                opciones: ["El oxígeno (O₂).", "El dióxido de carbono (CO₂).", "El óxido nítrico (NO).", "El nitrógeno (N₂)."],
                respuestaCorrecta: "El óxido nítrico (NO)."
            },
            {
                pregunta: "19) La misma molécula señal (por ejemplo, acetilcolina) puede inducir diferentes respuestas en diferentes células diana porque:",
                opciones: ["La molécula señal cambia su estructura.", "Las células diana pueden tener diferentes tipos de receptores o diferentes vías de señalización intracelular.", "La concentración de la señal es diferente.", "El código genético es distinto en cada célula."],
                respuestaCorrecta: "Las células diana pueden tener diferentes tipos de receptores o diferentes vías de señalización intracelular."
            },
            {
                pregunta: "20) Los factores de crecimiento (como el EGF o PDGF) son ligandos que típicamente se unen a _________ para estimular la supervivencia, el crecimiento y la proliferación celular.",
                opciones: ["Receptores acoplados a proteína G.", "Receptores Tirosina Quinasa (RTKs).", "Receptores nucleares.", "Canales de calcio."],
                respuestaCorrecta: "Receptores Tirosina Quinasa (RTKs)."
            },
            {
                pregunta: "21) Las respuestas celulares lentas (minutos a horas) a una señal extracelular generalmente implican:",
                opciones: ["Cambios en la función de proteínas ya existentes.", "La apertura y cierre de canales iónicos.", "Cambios en la expresión génica y la síntesis de nuevas proteínas.", "La liberación de segundos mensajeros únicamente."],
                respuestaCorrecta: "Cambios en la expresión génica y la síntesis de nuevas proteínas."
            },
            {
                pregunta: "22) La comunicación celular autocrina ocurre cuando:",
                opciones: ["Una célula se comunica con células lejanas a través del torrente sanguíneo.", "Una célula libera una señal que actúa sobre las células vecinas.", "Una célula responde a moléculas señal que ella misma ha secretado.", "Dos células se comunican a través de uniones en hendidura."],
                respuestaCorrecta: "Una célula responde a moléculas señal que ella misma ha secretado."
            },
            {
                pregunta: "23) La terminación de una señal es tan importante como su inicio. Un mecanismo común para terminar la señal del cAMP es:",
                opciones: ["Su exportación fuera de la célula.", "Su degradación a 5'-AMP por la enzima fosfodiesterasa.", "Su unión irreversible a la PKA.", "Su almacenamiento en el retículo endoplasmático."],
                respuestaCorrecta: "Su degradación a 5'-AMP por la enzima fosfodiesterasa."
            },
            {
                pregunta: "24) ¿Qué son las proteínas de andamiaje (scaffold proteins)?",
                opciones: ["Proteínas que degradan las señales.", "Proteínas que organizan a grupos de proteínas de señalización intracelular en complejos, aumentando la eficiencia y especificidad de la vía.", "Receptores de membrana.", "Segundos mensajeros."],
                respuestaCorrecta: "Proteínas que organizan a grupos de proteínas de señalización intracelular en complejos, aumentando la eficiencia y especificidad de la vía."
            },
            {
                pregunta: "25) El concepto de 'integración de señales' se refiere a que una célula:",
                opciones: ["Solo puede responder a una señal a la vez.", "Responde a todas las señales de la misma manera.", "Puede recibir múltiples señales simultáneamente y su respuesta final depende de la combinación e integración de las diferentes vías activadas.", "Ignora todas las señales excepto la más fuerte."],
                respuestaCorrecta: "Puede recibir múltiples señales simultáneamente y su respuesta final depende de la combinación e integración de las diferentes vías activadas."
            }

        ]
    },
    bio13: {
        nombre: "Quiz Temario - 12",
        preguntas: [
            {
                pregunta: "1) El principio fundamental de la biología celular establece que todas las células provienen de:",
                opciones: ["La generación espontánea.", "Células preexistentes a través de la división celular.", "La fusión de moléculas orgánicas.", "Un proceso de diferenciación a partir de materia inerte."],
                respuestaCorrecta: "Células preexistentes a través de la división celular."
            },
            {
                pregunta: "2) El ciclo celular se divide en dos fases principales:",
                opciones: ["Mitosis y meiosis.", "Interfase y fase M (división celular).", "Profase y telofase.", "Crecimiento y muerte celular."],
                respuestaCorrecta: "Interfase y fase M (división celular)."
            },
            {
                pregunta: "3) ¿Qué evento clave ocurre durante la fase S de la interfase?",
                opciones: ["La división del citoplasma.", "El crecimiento celular y la duplicación de organelos.", "La replicación del ADN, resultando en dos copias de la información genética.", "La condensación de los cromosomas."],
                respuestaCorrecta: "La replicación del ADN, resultando en dos copias de la información genética."
            },
            {
                pregunta: "4) Una célula que se encuentra en un estado de reposo proliferativo, sin dividirse pero metabólicamente activa, está en la fase:",
                opciones: ["G1.", "G2.", "M.", "G0."],
                respuestaCorrecta: "G0."
            },
            {
                pregunta: "5) El sistema de control del ciclo celular está regulado principalmente por la actividad de:",
                opciones: ["Los ribosomas y el retículo endoplasmático.", "Las mitocondrias.", "Complejos de proteínas quinasas dependientes de ciclina (Cdk) y sus subunidades reguladoras, las ciclinas.", "Las hormonas y los factores de crecimiento únicamente."],
                respuestaCorrecta: "Complejos de proteínas quinasas dependientes de ciclina (Cdk) y sus subunidades reguladoras, las ciclinas."
            },
            {
                pregunta: "6) Las ciclinas son proteínas clave en el control del ciclo celular porque:",
                opciones: ["Su concentración permanece constante durante todo el ciclo.", "Su concentración fluctúa de manera cíclica, activando a las Cdk específicas de cada fase.", "Son enzimas que fosforilan directamente a otras proteínas.", "Se encargan de la replicación del ADN."],
                respuestaCorrecta: "Su concentración fluctúa de manera cíclica, activando a las Cdk específicas de cada fase."
            },
            {
                pregunta: "7) La fase M del ciclo celular comprende dos procesos principales:",
                opciones: ["Replicación del ADN y crecimiento celular.", "Mitosis (división del núcleo) y citocinesis (división del citoplasma).", "Condensación y descondensación de la cromatina.", "Apoptosis y necrosis."],
                respuestaCorrecta: "Mitosis (división del núcleo) y citocinesis (división del citoplasma)."
            },
            {
                pregunta: "8) Durante la profase de la mitosis, ocurre el siguiente evento:",
                opciones: ["Las cromátidas hermanas se separan.", "Los cromosomas se alinean en la placa ecuatorial.", "La cromatina se condensa para formar cromosomas visibles y se inicia la formación del huso mitótico.", "Se reforma la envoltura nuclear."],
                respuestaCorrecta: "La cromatina se condensa para formar cromosomas visibles y se inicia la formación del huso mitótico."
            },
            {
                pregunta: "9) ¿Qué son las cohesinas?",
                opciones: ["Proteínas que ayudan a condensar los cromosomas.", "Complejos proteicos que mantienen unidas a las cromátidas hermanas después de la replicación.", "Componentes del huso mitótico.", "Enzimas que degradan la envoltura nuclear."],
                respuestaCorrecta: "Complejos proteicos que mantienen unidas a las cromátidas hermanas después de la replicación."
            },
            {
                pregunta: "10) En la anafase de la mitosis, el evento central es:",
                opciones: ["La desintegración de la envoltura nuclear.", "La separación de las cromátidas hermanas, que migran hacia polos opuestos de la célula.", "La alineación de los cromosomas en el centro.", "La división del citoplasma."],
                respuestaCorrecta: "La separación de las cromátidas hermanas, que migran hacia polos opuestos de la célula."
            },
            {
                pregunta: "11) La citocinesis en las células animales se produce mediante la formación de:",
                opciones: ["Una placa celular en el centro.", "Un fragmoplasto.", "Un anillo contráctil de actina y miosina que estrangula la célula.", "Una nueva pared celular."],
                respuestaCorrecta: "Un anillo contráctil de actina y miosina que estrangula la célula."
            },
            {
                pregunta: "12) La apoptosis se diferencia de la necrosis en que la apoptosis:",
                opciones: ["Es una muerte celular accidental causada por un daño masivo y provoca inflamación.", "Es una forma de muerte celular programada, ordenada y no causa inflamación.", "Solo ocurre en células vegetales.", "Implica la ruptura inmediata de la membrana plasmática."],
                respuestaCorrecta: "Es una forma de muerte celular programada, ordenada y no causa inflamación."
            },
            {
                pregunta: "13) Las enzimas clave que ejecutan el programa de apoptosis se llaman:",
                opciones: ["Ciclinas.", "Quinasas dependientes de ciclina (Cdk).", "Polimerasas.", "Caspasas."],
                respuestaCorrecta: "Caspasas."
            },
            {
                pregunta: "14) ¿Qué ocurre en un punto de control del ciclo celular, como el de G2/M?",
                opciones: ["La célula acelera su paso a la siguiente fase.", "La célula detiene su progresión para verificar que procesos anteriores (como la replicación del ADN) se hayan completado correctamente.", "Se sintetizan todas las proteínas necesarias para la división.", "La célula entra en estado de reposo (G0)."],
                respuestaCorrecta: "La célula detiene su progresión para verificar que procesos anteriores (como la replicación del ADN) se hayan completado correctamente."
            },
            {
                pregunta: "15) El Factor Promotor de la Maduración (MPF), descubierto en ovocitos de rana, es un complejo de:",
                opciones: ["Ciclina G1 y Cdk4.", "Ciclina S y Cdk2.", "Ciclina M (Ciclina B) y Cdk1, que induce la entrada en la fase M.", "Factores de crecimiento y sus receptores."],
                respuestaCorrecta: "Ciclina M (Ciclina B) y Cdk1, que induce la entrada en la fase M."
            },
            {
                pregunta: "16) Durante la mitosis, la envoltura nuclear se desensambla debido a:",
                opciones: ["La acción de enzimas digestivas.", "La fosforilación de las proteínas de la lámina nuclear por parte de las Cdk de la fase M.", "La tensión ejercida por el huso mitótico.", "El aumento de la concentración de calcio."],
                respuestaCorrecta: "La fosforilación de las proteínas de la lámina nuclear por parte de las Cdk de la fase M."
            },
            {
                pregunta: "17) Los ciclos celulares embrionarios tempranos son muy rápidos y se caracterizan por:",
                opciones: ["Fases G1 y G2 muy largas.", "Alternar las fases S y M sin las fases G1 y G2, lo que resulta en divisiones sin crecimiento celular.", "No tener fase S.", "La ausencia total de mitosis."],
                respuestaCorrecta: "Alternar las fases S y M sin las fases G1 y G2, lo que resulta en divisiones sin crecimiento celular."
            },
            {
                pregunta: "18) El huso mitótico, responsable de la segregación de los cromosomas, está compuesto por:",
                opciones: ["Microfilamentos de actina.", "Filamentos intermedios.", "Microtúbulos.", "Fibras de colágeno."],
                respuestaCorrecta: "Microtúbulos."
            },
            {
                pregunta: "19) ¿En qué fase de la mitosis los cromosomas alcanzan su máxima condensación y se alinean en el plano ecuatorial de la célula?",
                opciones: ["Profase.", "Anafase.", "Telofase.", "Metafase."],
                respuestaCorrecta: "Metafase."
            },
            {
                pregunta: "20) La necrosis es un tipo de muerte celular que:",
                opciones: ["Es programada genéticamente.", "Ocurre como resultado de un daño agudo o trauma, provocando que la célula se hinche y se rompa, liberando su contenido.", "Es beneficiosa para el desarrollo embrionario.", "Es mediada por caspasas."],
                respuestaCorrecta: "Ocurre como resultado de un daño agudo o trauma, provocando que la célula se hinche y se rompa, liberando su contenido."
            },
            {
                pregunta: "21) La vía extrínseca de la apoptosis se inicia por:",
                opciones: ["Daño en el ADN.", "La unión de ligandos externos (como el ligando Fas) a receptores de muerte en la superficie celular.", "La liberación de citocromo c desde la mitocondria.", "La falta de nutrientes."],
                respuestaCorrecta: "La unión de ligandos externos (como el ligando Fas) a receptores de muerte en la superficie celular."
            },
            {
                pregunta: "22) La vía intrínseca de la apoptosis se desencadena por estímulos internos como el daño irreparable en el ADN y conduce a:",
                opciones: ["La activación directa de los receptores de muerte.", "La liberación de citocromo c desde la mitocondria, que activa las caspasas.", "La detención permanente del ciclo celular en G1.", "La formación de una placa celular."],
                respuestaCorrecta: "La liberación de citocromo c desde la mitocondria, que activa las caspasas."
            },
            {
                pregunta: "23) La citocinesis en las células vegetales difiere de las animales en que implica:",
                opciones: ["La formación de un anillo contráctil.", "La fusión de la célula con una célula vecina.", "La formación de una placa celular, derivada de vesículas del aparato de Golgi, que dará lugar a una nueva pared celular.", "La desintegración completa de la célula."],
                respuestaCorrecta: "La formación de una placa celular, derivada de vesículas del aparato de Golgi, que dará lugar a una nueva pared celular."
            },
            {
                pregunta: "24) Las condensinas son complejos proteicos que:",
                opciones: ["Mantienen unidas a las cromátidas hermanas.", "Ayudan a la compactación de la cromatina para formar los cromosomas mitóticos en la profase.", "Forman los microtúbulos del huso.", "Regulan el paso por los puntos de control."],
                respuestaCorrecta: "Ayudan a la compactación de la cromatina para formar los cromosomas mitóticos en la profase."
            },
            {
                pregunta: "25) El 'punto de restricción' en G1 es crucial porque:",
                opciones: ["Es el punto donde la célula decide si entra en fase M.", "Una vez que la célula lo cruza, se compromete irreversiblemente a completar el resto del ciclo celular, independientemente de las señales externas.", "Marca el final de la replicación del ADN.", "Es el momento en que se activa la apoptosis."],
                respuestaCorrecta: "Una vez que la célula lo cruza, se compromete irreversiblemente a completar el resto del ciclo celular, independientemente de las señales externas."
            }

        ]
    }
};

// ===================================================================================
// LÓGICA DEL QUIZ: NO SE NECESITA MODIFICAR NADA DEBAJO DE ESTA LÍNEA
// ===================================================================================

const moduleSelectionContainer = document.getElementById('module-selection');
const moduleButtonsContainer = document.getElementById('module-buttons');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');

const questionTextElement = document.getElementById('question-text');
const questionImageElement = document.getElementById('question-image');
const answerButtonsElement = document.getElementById('answer-buttons');
const progressTextElement = document.getElementById('progress-text');
const nextButton = document.getElementById('next-btn');
const scoreTextElement = document.getElementById('score-text');
const restartButton = document.getElementById('restart-btn');

let currentModuleId, currentQuestions, currentQuestionIndex, score;

function initializeModules() {
    moduleButtonsContainer.innerHTML = '';
    Object.keys(quizData).forEach(moduleId => {
        const module = quizData[moduleId];
        const button = document.createElement('button');
        button.innerText = module.nombre;
        button.classList.add('btn');
        button.addEventListener('click', () => startQuiz(moduleId));
        moduleButtonsContainer.appendChild(button);
    });
}

function startQuiz(moduleId) {
    currentModuleId = moduleId;
    currentQuestions = quizData[moduleId].preguntas;
    currentQuestionIndex = 0;
    score = 0;
    moduleSelectionContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    nextButton.classList.add('hidden');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion(currentQuestions[currentQuestionIndex]);
    } else {
        showResults();
    }
}

function showQuestion(question) {
    progressTextElement.innerText = `Pregunta ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
    questionTextElement.innerText = question.pregunta;
    if (question.imagen && question.imagen.trim() !== "") {
        questionImageElement.src = question.imagen;
        questionImageElement.classList.remove('hidden');
    }
    question.opciones.forEach(opcion => {
        const button = document.createElement('button');
        button.innerText = opcion;
        button.classList.add('btn');
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    questionImageElement.classList.add('hidden');
    questionImageElement.src = '';
    nextButton.classList.add('hidden');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.innerText === currentQuestions[currentQuestionIndex].respuestaCorrecta;
    if (correct) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.innerText === currentQuestions[currentQuestionIndex].respuestaCorrecta) {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.classList.remove('hidden');
}

function showResults() {
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    scoreTextElement.innerText = `Tu puntuación: ${score} de ${currentQuestions.length}`;
}

function restartApp() {
    resultsContainer.classList.add('hidden');
    moduleSelectionContainer.classList.remove('hidden');
    initializeModules();
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

restartButton.addEventListener('click', restartApp);

initializeModules();
