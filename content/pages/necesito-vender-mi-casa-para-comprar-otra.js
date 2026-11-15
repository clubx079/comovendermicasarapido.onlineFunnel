export default {
  slug: 'necesito-vender-mi-casa-para-comprar-otra',
  title: 'Necesito vender mi casa para comprar otra: cómo hacerlo',
  h1: 'Necesito vender mi casa para comprar otra: cómo coordinar las dos operaciones',
  description: 'Necesito vender mi casa para comprar otra: qué conviene hacer primero, cómo usar la seña y los plazos para firmar las dos operaciones sin quedarte en el medio.',
  navLabel: 'Vender para comprar',
  blurb: 'Vender tu casa para comprar otra: qué va primero, cómo atar las dos operaciones con seña y plazos, y cuánto dinero hace falta.',
  group: 'Vender con apuro',
  order: 40,
  keyword: {
    phrase: 'necesito vender mi casa para comprar otra',
    evidence: 'autocomplete gl=py 2026-11-15: "necesito vender mi casa para comprar otra", "quiero vender mi casa para comprar otra", "tengo que vender mi casa para comprar otra", "puedo vender mi casa para comprar otra", "vender mi casa para comprar otra", "vender mi casa hipotecada para comprar otra"',
  },
  published: '2026-11-16',
  updated: '2026-11-16',
  review: 'pending',
  reviewNote: 'An escribano should confirm: the effect of the seña (Código Civil art. 723: who gave it loses it on withdrawal, who received it returns it doubled), that a private contract for a sale that needs escritura pública only obliges the parties to sign that escritura (art. 701), and that a part-payment in kind is a permuta when the value in kind equals or exceeds the money (art. 756). The page gives no bank product, rate or deadline.',
  answer: 'Si necesitás vender tu casa para comprar otra en Paraguay, lo más seguro es vender primero, o al menos tener un comprador con seña, antes de comprometerte con la casa nueva. Las dos operaciones se atan con contratos que tengan plazos compatibles: que te paguen tu casa unos días antes, o el mismo día, en que vos pagás la otra. La seña asegura cada trato, pero también te puede costar plata si firmás la compra y tu venta se cae. Por eso el orden importa más que la velocidad: primero el comprador de la tuya, después la seña de la que querés.',
  summary: [
    'Vender primero es más lento pero más seguro: sabés con cuánto dinero contás.',
    'Comprar primero solo conviene si podés pagar la casa nueva aunque la tuya tarde en venderse.',
    'La seña asegura el trato: quien la dio la pierde si se arrepiente, quien la recibió devuelve el doble.',
    'Los plazos de las dos escrituras se pactan por escrito: lo ideal es firmar el mismo día o con pocos días de diferencia.',
    'Empezá por publicar tu casa: en Casa-Libre es gratis y te escriben por WhatsApp.',
  ],
  flow: ['Precio de tu casa', 'Comprador con seña', 'Seña de la nueva', 'Dos escrituras', 'Mudanza'],
  cta: {
    title: 'Primero, que tu casa esté a la vista',
    text: 'Mientras buscás la casa nueva, la tuya ya puede estar recibiendo consultas. Publicar es gratis y sin comisión sobre la venta.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://casa-libre.com.py/publicar',
  },
  sections: [
    {
      id: 'que-va-primero',
      h2: '¿Qué conviene: vender primero o comprar primero?',
      blocks: [
        { t: 'p', html: 'Para la mayoría, vender primero. Quien compra sin haber vendido se compromete a pagar con dinero que todavía no tiene, y si su casa tarda, pierde la seña o termina rebajando de apuro.' },
        {
          t: 'table',
          caption: 'Cuatro caminos para pasar de una casa a otra',
          head: ['Camino', 'Cómo funciona', 'Riesgo principal', 'Cuándo conviene'],
          rows: [
            ['Vender primero', 'Cerrás tu venta y recién después buscás', 'Quedarte un tiempo sin casa propia', 'Si podés alquilar o quedarte con familia unos meses'],
            ['Comprar primero', 'Señás la nueva y después vendés la tuya', 'Que tu casa no se venda a tiempo y pierdas la seña', 'Si tenés ahorros o crédito para pagar igual'],
            ['Las dos a la vez', 'Atás plazos: cobrás y pagás casi el mismo día', 'Que una de las dos se caiga y arrastre a la otra', 'Si ya tenés comprador firme y vendedor paciente'],
            ['Permuta', 'Entregás tu casa como parte de pago de la otra', 'Que no coincidan los valores ni los gustos', 'Si el dueño de la otra acepta tu casa'],
          ],
          note: 'Descripción general. Cada operación tiene sus condiciones.',
        },
        { t: 'p', html: 'El cuarto camino tiene sus propias reglas: están en <a href="/permuta-de-inmuebles/">permuta de inmuebles</a>.' },
      ],
    },
    {
      id: 'coordinar',
      h2: 'Cómo coordinar las dos operaciones para firmar casi el mismo día',
      blocks: [
        { t: 'p', html: 'Pidiendo plazos en los dos contratos antes de firmar el primero. La escritura de tu venta tiene que caer antes, o el mismo día, que la de tu compra.' },
        { t: 'steps', items: [
          { title: 'Sabé cuánto vale la tuya', html: 'Compará con casas parecidas en venta en tu zona, por ejemplo en <a href="https://casa-libre.com.py/comprar">Casa-Libre</a>. Sin ese número no sabés qué casa nueva podés mirar.' },
          { title: 'Publicá y conseguí un comprador con seña', html: 'Pactá por escrito la fecha tope de escritura y la fecha de entrega de la casa. Pedí unas semanas de margen.' },
          { title: 'Recién entonces señá la nueva', html: 'Con un plazo de escritura igual o posterior al de tu venta. Si podés, dejá escrito que tu compra depende de que cobres tu venta.' },
          { title: 'Usá el mismo escribano, si las partes aceptan', html: 'Un solo escribano que lleve las dos escrituras puede ordenar informes y fechas para firmar una detrás de la otra.' },
          { title: 'Firmá, cobrá, pagá y mudate', html: 'Primero tu venta, después tu compra. El dinero pasa de una mesa a la otra el mismo día.' },
        ] },
        { t: 'p', html: 'Si tu casa tiene algo pendiente, resolvelo antes de empezar la cadena: una deuda de impuestos o un embargo descubiertos a último momento atrasan las dos operaciones. Mirá <a href="/vender-casa-con-deudas/">¿se puede vender una casa con deuda?</a>' },
      ],
    },
    {
      id: 'sena',
      h2: 'La seña: qué pasa si una de las dos operaciones se cae',
      blocks: [
        { t: 'p', html: 'La seña es la plata que se entrega para asegurar el trato, y tiene una regla que conviene conocer antes de firmar dos veces.' },
        { t: 'ul', items: [
          'Según el Código Civil, quien dio la seña puede arrepentirse, pero la pierde.',
          'Quien la recibió también puede arrepentirse, pero tiene que devolverla con otro tanto, es decir, el doble.',
          'Si el trato se cumple, la seña se toma como parte del precio.',
        ] },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consultá con un abogado o escribano antes de decidir.' },
        { t: 'p', html: 'En la práctica: si señaste la casa nueva y tu comprador se echa atrás, te quedás con la seña que él te dio, pero seguís obligado con tu compra. Por eso los dos contratos tienen que decir fechas, monto de la seña y qué pasa si la otra operación no se concreta. Un contrato privado bien hecho obliga a las partes a firmar después la escritura pública, que es la que transfiere la casa.' },
      ],
    },
    {
      id: 'cuanta-plata',
      h2: '¿Cuánto dinero necesito para pasar de una casa a la otra?',
      blocks: [
        { t: 'p', html: 'La diferencia de precio entre las dos, más los gastos de las dos operaciones, más un margen para el tiempo en que tenés dinero puesto en señas.' },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: vendés a Gs. 500.000.000 y comprás a Gs. 650.000.000',
          html: 'Supuestos de ejemplo: seña del 10% en las dos operaciones. No incluye impuestos ni gastos de escritura, que hay que sumar aparte.',
          rows: [
            ['Seña que recibís por tu casa', '500.000.000 × 10%', 'Gs. 50.000.000'],
            ['Seña que pagás por la nueva', '650.000.000 × 10%', 'Gs. 65.000.000'],
            ['Dinero propio que ponés al señar', '65.000.000 − 50.000.000', 'Gs. 15.000.000'],
            ['Saldo que cobrás al escriturar tu venta', '500.000.000 − 50.000.000', 'Gs. 450.000.000'],
            ['Saldo que pagás al escriturar tu compra', '650.000.000 − 65.000.000', 'Gs. 585.000.000'],
            ['Diferencia total a cubrir', '650.000.000 − 500.000.000', 'Gs. 150.000.000'],
          ],
        },
        { t: 'p', html: 'Esos Gs. 150.000.000 salen de ahorros o de un crédito. Si pensás pedirlo, hablá con los bancos o las cooperativas antes de señar, no después: la aprobación tiene sus tiempos y el plazo de tu contrato corre igual.' },
      ],
    },
    {
      id: 'entrega',
      h2: '¿Y si tengo que entregar mi casa antes de recibir la nueva?',
      blocks: [
        { t: 'p', html: 'Se negocia en el contrato de venta: podés pedir quedarte unas semanas después de la escritura, pagando o no un alquiler por ese tiempo.' },
        { t: 'ul', items: [
          'Dejá por escrito hasta qué día te quedás y qué pasa si te pasás de esa fecha.',
          'El comprador puede pedir retener una parte del precio hasta la entrega de las llaves. Es razonable.',
          'Si no hay acuerdo, calculá dentro de tus gastos un alquiler corto o un depósito para los muebles.',
        ] },
      ],
    },
    {
      id: 'parte-de-pago',
      h2: 'Entregar tu casa como parte de pago',
      blocks: [
        { t: 'p', html: 'Es posible si el vendedor de la otra casa acepta: en vez de vender y comprar, hacen un solo trato en el que tu casa cubre una parte del precio y el resto se paga en dinero.' },
        { t: 'p', html: 'Tiene una ventaja clara, que es que no dependés de un tercero, y un límite: tiene que interesarle tu casa justo a quien tiene la que vos querés. Ponelo en tu aviso ("acepto casa en parte de pago" o "escucho permuta") para que te encuentre quien busca eso.' },
      ],
    },
    {
      id: 'empezar',
      h2: 'Por dónde empezar esta semana',
      blocks: [
        { t: 'p', html: 'Por tu casa. Mientras no tenga precio y aviso, todo lo demás son suposiciones.' },
        {
          t: 'casalibre',
          title: 'Publicá la tuya y mirá las otras en el mismo lugar',
          html: 'En Casa-Libre podés publicar tu casa gratis y, a la vez, buscar la nueva por ciudad, tipo y en el mapa. Los interesados te escriben directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android.',
          button: 'Publicar gratis en Casa-Libre',
          href: 'https://casa-libre.com.py/publicar',
        },
        { t: 'p', html: 'Casa-Libre no compra casas ni interviene en los contratos: eso lo arreglás con el comprador y con el escribano. Para el paso a paso de la venta está la guía de <a href="https://casa-libre.com.py/guias/como-vender-mi-casa">Casa-Libre</a> para propietarios.' },
      ],
    },
  ],
  faq: [
    { q: '¿Puedo vender mi casa para comprar otra al mismo tiempo?', a: 'Sí, coordinando los plazos de los dos contratos para que cobres tu venta antes, o el mismo día, en que pagás tu compra. Conviene tener primero un comprador con seña para tu casa.' },
    { q: 'Quiero vender mi casa para comprar otra: ¿por dónde empiezo?', a: 'Por saber cuánto vale la tuya y publicarla. Con ese número sabés qué casas podés mirar y cuánto dinero te va a faltar.' },
    { q: 'Tengo que vender mi casa para comprar otra: ¿puedo señar la nueva antes de vender?', a: 'Podés, pero es el camino más riesgoso: si tu casa no se vende dentro del plazo, podés perder la seña. Hacelo solo si podés pagar la casa nueva de otra forma o si el contrato dice que tu compra depende de tu venta.' },
    { q: '¿Puedo vender mi casa hipotecada para comprar otra?', a: 'Sí, pero antes de escriturar hay que cancelar la hipoteca, por lo general con el mismo dinero de la venta. Pedile al banco el saldo exacto y restalo de lo que vas a tener para la compra.' },
    { q: '¿Qué pasa si el comprador de mi casa se arrepiente?', a: 'Si te dio una seña, la pierde y te la quedás. Pero tu compromiso con la casa nueva sigue en pie, así que revisá qué dice ese otro contrato para ese caso.' },
  ],
  sources: [
    { label: 'Código Civil paraguayo (Ley 1183/85), art. 723', detail: 'Efectos de la seña cuando una de las partes se arrepiente.' },
    { label: 'Código Civil paraguayo (Ley 1183/85), arts. 700 y 701', detail: 'La venta de inmuebles se hace por escritura pública; el contrato privado obliga a otorgarla.' },
    { label: 'Código Civil paraguayo (Ley 1183/85), arts. 756 y 799 a 802', detail: 'Pago parte en dinero y parte en otro bien, y contrato de permuta.' },
  ],
  internalSources: [
    { label: 'Código Civil, Libro III, arts. 700, 701, 723, 756, 799-802', url: 'https://www.bacn.gov.py/leyes-paraguayas/522/', date: '2026-11-15', note: 'Art. 723: who gave the señal loses it; who received it returns it with as much again. Art. 701: private contract obliges to sign the escritura. Art. 756: mixed price.' },
    { label: 'Bank or cooperative credit', url: '', date: '2026-11-15', note: 'No product, rate or term stated: the page only tells the reader to ask before signing.' },
    { label: 'Example amounts', url: '', date: '2026-11-15', note: 'Hypothetical.' },
  ],
  closing: {
    title: 'El primer paso es publicar la tuya',
    text: 'Con tu casa publicada sabés qué interés hay y con qué plata contás. Publicar en Casa-Libre es gratis.',
    button: 'Publicar mi casa gratis',
    href: 'https://casa-libre.com.py/publicar',
  },
  related: ['permuta-de-inmuebles', 'vendo-casa-por-viaje', 'vender-casa-con-deudas'],
};
