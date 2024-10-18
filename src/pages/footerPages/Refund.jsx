import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'

const Refund = () => {
  return (
    <DefaultLayout>

    
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">Política de Reembolsos</h1>
      
      {/* Sección de Cambios y Devoluciones de SLEEVE JOYERÍA */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">SLEEVE JOYERÍA</h2>
        <h3 className="text-xl font-medium mb-2">Cambios y Devoluciones</h3>
        
        <ol className="list-decimal list-inside space-y-2">
          <li>
            TODAS LAS JOYAS DE SLEEVE JOYERÍA TIENEN GARANTÍA DE POR VIDA DEL MATERIAL (ORO 18K LEY 750/730 Y PLATA LEY 925. LAS PIEDRAS PRECIOSAS SON 100% NATURALES).
          </li>
          <li>No se hacen cambios de productos por medidas (verificar guía de medidas).</li>
          <li>No se hacen cambios, garantías o devoluciones por el mal uso del producto.</li>
          <li>
            No se realizan devoluciones de dinero, verificar disponibilidad del producto antes de realizar el pago; si realizas el pago y no está disponible, dicho saldo quedará a favor para otra prenda que elijas. Si las joyas cumplen con todas las especificaciones suministradas por el vendedor después de ser aprobadas por el cliente, tampoco aplicará cambio o devolución.
          </li>
          <li>
            El comprador tendrá 5 días para reportar garantía por defectos de fábrica o caída de alguna piedra.
          </li>
        </ol>
      </section>

      {/* Sección de Cambios y Garantías de SLEEVE BOUTIQUE */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">SLEEVE BOUTIQUE</h2>
        <h3 className="text-xl font-medium mb-2">Cambios y Garantías</h3>
        
        <h4 className="text-lg font-medium mb-2">Políticas de Sleeve Boutique</h4>

        <ol className="list-decimal list-inside space-y-2">
          <li>
            Tienes un máximo de ocho (8) días calendario para realizar cambios y quince (15) días calendario para solicitar garantías.
          </li>
          <li>
            Para poder realizar un cambio, el producto original deberá ser devuelto en las mismas condiciones en que lo recibiste, debe estar en perfecto estado y no puede haber sido utilizado. Medias, undies y otras prendas íntimas no tienen cambio.
          </li>
          <li>Los gastos de envíos por cambios y devoluciones deben ser asumidos por el comprador.</li>
          <li>
            En caso de garantía aprobada por temas de fabricación (Sleeve se pondrá en contacto con los fabricantes para verificar dicha garantía), SLEEVE se hace responsable de los costos de envíos.
          </li>
          <li>
            En caso de devolución por garantía, se ofrecen las alternativas de saldo a favor a través de tarjeta regalo para hacer una nueva compra futura o cambio de producto de la misma referencia, ya que no se realiza reembolso de dinero. Una vez revisada la prenda, este proceso puede tomar hasta cinco (5) días hábiles.
          </li>
          <li>
            Las prendas que sean promociones NO aplican para cambios, devoluciones o garantías, pues son venta final.
          </li>
          <li>No se realizan devoluciones de dinero.</li>
          <li>No se realizan cambios por inconformidad con la prenda, por tallas (verificar guía de tallas).</li>
          <li>No se realizan cambios por garantías de las prendas si se devuelven en mal estado.</li>
          <li>
            Por medio del PQRS deberá presentar e informar cualquier novedad o reclamación en relación al proceso de atención, compra, pagos, envío, calidad, garantías o necesidad para el debido proceso en el contexto del Estatuto del Consumidor (Ley 1480 de 2011).
          </li>
          <li>
            En la eventualidad de reclamaciones, adjunte al PQRS video y fotografías de la novedad en la prenda para ilustrar tal situación y darle la mejor solución.
          </li>
        </ol>
      </section>
    </div>
    </DefaultLayout>
  )
}

export default Refund