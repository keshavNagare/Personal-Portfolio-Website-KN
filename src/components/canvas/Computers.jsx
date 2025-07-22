import { Suspense,useEffect,useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Preload,useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { HemisphereLight, PointLight } from "three";


const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  const [scale, setScale] = useState([0.28, 0.38, 0.29]);

  useEffect(() => {

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
    
      let newScaleX = 0.6;
      let newScaleY = 0.6; // Adjust this for Y-axis height
      let newScaleZ = 0.6;
    
      if (width < 440) {
        newScaleX = 0.6;
        newScaleY = 0.8; // Taller on small screens
        newScaleZ = 0.6;
      } else if (width < 768) {
        newScaleX = 0.7;
        newScaleY = 0.9;
        newScaleZ = 0.7;
      } else if (width < 1024) {
        newScaleX = 0.6;
        newScaleY = 0.8; // Taller on small screens
        newScaleZ = 0.6
      } else {
        newScaleX = 0.9;
        newScaleY = 0.80; // Taller on large screens
        newScaleZ = 0.55;
      }
    
      if (height < 500) {
        newScaleY += 0.3; // Add extra height if the screen is short
      }
    
      setScale([newScaleX, newScaleY, newScaleZ]);
    };
    

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <mesh>
      <primitive object={computer.scene} scale={scale} position={[0,-1.4,-1.2]} rotation={[-0.0,0.15,-0.1]} />
    </mesh>
  )
}

const ComputersCanvas = () =>{
  return (
    <Canvas frameloop="demand" shadows camera={{position:[20,3,5],fov:25}} gl={{preserveDrawingBuffer:true}} >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <Computers/>
      </Suspense>
      <Preload all />
    </Canvas>

  )
}

export default ComputersCanvas