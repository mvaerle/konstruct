import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import './App.css'


function App() {
  return (
    <>
      <ShaderGradientCanvas
        style={{
          width: '100vw',
          height: '100vh',
          position: 'relative'
        }}
      >
        <ShaderGradient
          control='query'
          urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.1&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%2300008e&color2=%23005800&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&grain=off&lightType=env&pixelDensity=1&positionX=-0.5&positionY=0.1&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.2&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&toggleAxis=false&type=plane&uAmplitude=0&uDensity=1.1&uFrequency=5.5&uSpeed=0.2&uStrength=2.4&uTime=0.2&wireframe=false&zoomOut=false'
        />
      </ShaderGradientCanvas>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '4rem',
        fontWeight: 'bold',
      }}>
        Konstruct
      </div>
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        textAlign: 'center',
        lineHeight: '1.5',
      }}>
        <div style={{ fontSize: '1.0rem', fontWeight: 'bold' }}>
          Konstruct B.V.
        </div>
        <div>Karel Ensinckstraat 40B</div>
        <div>5246 GM 's-Hertogenbosch</div>
        <div>+31(0)6 464 22 181</div>
        <div><a href="mailto:marijn@konstruct.nl" style={{ color: 'white', textDecoration: 'none' }}>marijn@konstruct.nl</a></div>
      </div>
    </>
  )
}

export default App
