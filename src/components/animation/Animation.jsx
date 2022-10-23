import React, { Suspense }  from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars} from '@react-three/drei'
import { Abstract } from './Abstract'

const Animation = () => {
  return (
  <div style={{width: '100%', height: '50vh'}}>
    <Canvas camera={{zoom: 1, position:[15, 20, 15]}}>
      <ambientLight intensity={-0.5}/>
      <pointLight position={[35, -35, -10]} intensity={0.4}/>
      <pointLight position={[-35, 35, -10]} intensity={0.4}/>
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={5} />
      <Suspense fallback={null}>
      <Abstract/>
      </Suspense>
      <OrbitControls/>
    </Canvas>
  </div>
  )
}

export default Animation