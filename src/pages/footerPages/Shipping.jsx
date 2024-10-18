import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'

const Shipping = () => {
  return (
    <DefaultLayout>
        <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">Política de Envíos</h1>
      
      {/* Sección de SLEEVE JOYERÍA */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">SLEEVE JOYERÍA</h2>
        
        <ol className="list-decimal list-inside space-y-2">
          <li>
            El tiempo de entrega de los productos es de hasta tres (3) días hábiles, en condiciones de operación normal.
          </li>
          <li>
            Los tiempos de entrega empiezan a contar a partir de la aprobación y confirmación del pago.
          </li>
          <li>
            En el momento de la aprobación del pago, recibirá un mensaje y/o correo electrónico de confirmación de su pedido y se le enviará la guía.
          </li>
          <li>
            Todos los productos se despachan a domicilio por vía terrestre, a toda Colombia, a través de coordinadora mercantil donde tenga cobertura. En los lugares en que nuestro aliado en logística no preste servicio, se enviará hasta el lugar más cercano al destino solicitado. No se realizan entregas en zonas rurales o de difícil acceso y, en caso de ser unidad residencial, los productos serán entregados en portería. Si por algún motivo la persona autorizada no puede recibir el pedido en 2 ocasiones, este será devuelto a Sleeve en Medellín, y para volver a ser enviado, el cliente debe asumir el flete.
          </li>
          <li>
            No hacemos envíos por otras transportadoras diferentes a Coordinadora a nivel nacional y por DHL a nivel internacional, además estamos sujetos a sus tiempos, términos y condiciones. Cabe resaltar que es un servicio adicional por el cual el cliente debe tener conocimiento del riesgo que se puede correr.
          </li>
          <li>
            Los envíos internacionales pueden causar costos de impuestos adicionales, dependiendo del país destino, y estos son a cargo del comprador.
          </li>
          <li>
            Es importante revisar el estado del empaque antes de firmar la guía de recibido y dejar escrito en ella cualquier novedad encontrada. Si no se registra algún reclamo en la guía, se entenderá que el recibo del producto fue satisfactorio, ya que todos los productos van empacados en bolsa de seguridad.
          </li>
          <li>
            Por medio del PQRS deberá presentar e informar cualquier novedad, reclamación en relación al proceso de atención, compra, pagos, envío, calidad, garantías o necesidad para el debido proceso en el contexto del Estatuto del Consumidor (Ley 1480 de 2011).
          </li>
        </ol>
      </section>

      {/* Sección de SLEEVE BOUTIQUE */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">SLEEVE BOUTIQUE</h2>
        
        <ol className="list-decimal list-inside space-y-2">
          <li>
            El tiempo de entrega de los productos es de hasta tres (3) días hábiles, en condiciones de operación normal.
          </li>
          <li>
            Los tiempos de entrega empiezan a contar a partir de la aprobación del pago.
          </li>
          <li>
            En el momento de la aprobación del pago, recibirá un mensaje de confirmación de su pedido y se le enviará la guía.
          </li>
          <li>
            Todos los productos se despachan a domicilio por vía terrestre, a toda Colombia, a través de coordinadora mercantil donde tenga cobertura. En los lugares en que nuestro aliado en logística no preste servicio, se enviará hasta el lugar más cercano al destino solicitado. No se realizan entregas en zonas rurales o de difícil acceso y, en caso de ser unidad residencial, los productos serán entregados en portería. Si por algún motivo la persona autorizada no puede recibir el pedido en 2 ocasiones, este será devuelto a la fábrica y para volver a ser enviado, el cliente debe asumir el flete.
          </li>
          <li>
            No hacemos envíos por otras transportadoras diferentes a Coordinadora y estamos sujetos a sus tiempos, términos y condiciones.
          </li>
          <li>
            Es importante revisar el estado del empaque antes de firmar la guía de recibido y dejar escrito en ella cualquier novedad encontrada. Si no se registra algún reclamo en la guía, se entenderá que el recibo del producto fue satisfactorio, ya que todos los productos van empacados en bolsa de seguridad.
          </li>
          <li>
            Por medio del PQRS deberá presentar e informar cualquier novedad, reclamación en relación al proceso de atención, compra, pagos, envío, calidad, garantías o necesidad para el debido proceso en el contexto del Estatuto del Consumidor (Ley 1480 de 2011).
          </li>
        </ol>
      </section>
    </div>

    </DefaultLayout>
  )
}

export default Shipping