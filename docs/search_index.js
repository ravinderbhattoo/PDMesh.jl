var documenterSearchIndex = {"docs":
[{"location":"toc.html#Table-of-contents","page":"Table of contents","title":"Table of contents","text":"","category":"section"},{"location":"toc.html","page":"Table of contents","title":"Table of contents","text":"Pages = [\n            \"index.md\",\n            \"examples.md\",\n            \"list.md\"\n        ]\nDepth = 3","category":"page"},{"location":"examples.html#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"Output files can be visualized using Ovito software.","category":"page"},{"location":"examples.html#Cone","page":"Examples","title":"Cone","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"This Julia code creates a mesh of a cone and saves it to a file called cone.data in the output directory.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"using PDMesh: imports the PDMesh package, which provides a set of functions for creating and manipulating 3D meshes.\nprintln(\"Creating Cone...\"): prints a message to the console indicating that the mesh creation process has started.\nout = create(Cone(10.0, 20.0), resolution=0.5, rand_=0.0): creates a mesh of a cone with a base radius of 10.0 and a height of 20.0 using the create function provided by PDMesh. The resolution argument controls the mesh resolution, and the rand_ argument controls the amount of random noise to add to the mesh vertices (in this case, no noise is added).\nwrite_data(\"./output/cone.data\", out): writes the mesh data stored in out to a file called cone.data in the output directory. The data is stored in a format that can be read by various visualization software packages.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"using PDMesh\nprintln(\"Creating Cone...\")\nout = create(Cone(10.0, 20.0), resolution=0.5, rand_=0.0)\nwrite_data(\"./output/cone.data\", out)","category":"page"},{"location":"examples.html#Cylinder","page":"Examples","title":"Cylinder","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"This code creates a 3D cylinder using the create function. The Cylinder function is used to define the geometry of the cylinder. It takes three arguments:","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"The radius of the cylinder, which is set to 10.0.\nThe height of the cylinder, which is set to 3.0.\nThe number of segments used to create the cylinder, which is set to 100.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"The create function is then called with the cylinder object as the first argument. The second argument, resolution, specifies the desired resolution of the mesh, which is set to 0.5 in this case. The third argument, rand_, specifies the randomness of the mesh, which is set to 0.0 in this case.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"Finally, the write_data function is called to write the mesh data to a file. The first argument is the path and filename of the output file, which is set to \"./output/cylinder.data\". The second argument is the mesh data object returned by the create function.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"using PDMesh\nprintln(\"Creating Cylinder...\")\nout = create(Cylinder(10.0, 3.0, 100.0), resolution=0.5, rand_=0.0)\nwrite_data(\"./output/cylinder.data\", out)","category":"page"},{"location":"examples.html#Sphere","page":"Examples","title":"Sphere","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"The create function is called to generate the sphere. This function takes in two arguments: the first is the shape of the object to be created (in this case, a Sphere with a radius of 10.0), and the second argument is a resolution parameter, which controls the level of detail in the mesh. The smaller the resolution value, the finer the mesh.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"The create function returns a mesh object, which is stored in the out variable.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"Finally, the write_data function is called to write the mesh data to a file called \"sphere.data\" in the \"./output\" directory.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"using PDMesh\nprintln(\"Creating Sphere...\")\nout = create(Sphere(10.0), resolution=0.5, rand_=0.0)\nwrite_data(\"./output/sphere.data\", out)","category":"page"},{"location":"examples.html#Notched-Bar","page":"Examples","title":"Notched Bar","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"This code generates a notched bar shape. A cuboid is created using the Cuboid function, which takes as input a matrix with the ranges of the x, y, and z axes of the cuboid. In this case, the cuboid has ranges of -10 to 10 in the x-axis, 0 to 3 in the y-axis, and -2 to 2 in the z-axis. This creates a cuboid with a rectangular prism shape.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"Next, a function f is defined that takes in the out dictionary that contains information about the mesh, including the coordinates x and the type of each point in the mesh. The function returns a boolean mask that is true for the points that meet the specified condition. In this case, f masks all points that have an x-coordinate between -0.1 and 0.1 and a y-coordinate greater than 2.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"The delete function is then called on the obj cuboid using f as the input. This deletes all the points in the mesh that satisfy the boolean mask generated by f, which creates a notch in the bar shape.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"Finally, the create function is called on the modified obj mesh to create a new mesh with a higher resolution (0.1) and no randomness in the mesh (rand_=0.0). The type of each point is set to 1 (type=1). The resulting mesh is written to a data file named \"notched_bar.data\" in the \"./output\" directory.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"using PDMesh\nprintln(\"Creating Notched Bar...\")\nobj = Cuboid([-10 10; 0 3; -2 2])\nf = out -> begin\n    x=out[:x];\n    mask = (x[1, :] .< 0.1) .& (x[1, :] .> -0.1) .& (x[2, :] .> 2)\n    mask\nend\nobj = delete(obj, f)\n\nout = create(obj, resolution=0.1, rand_=0.0, type=1)\nwrite_data(\"./output/notched_bar.data\", out)","category":"page"},{"location":"examples.html#Composite","page":"Examples","title":"Composite","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"In this example, a Cuboid is created initially and then its type is modified using the changetype function inside the for loop.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"In each iteration of the loop, a new center and radius is generated randomly. The changetype function is then called to modify the obj by creating a boolean mask of the points inside a sphere with the generated center and radius. The mask is created using the Euclidean distance formula (x - center)^2 < radius^2. The mask is also modified to exclude any points that already have a type of 2, which in this case is the type for spheres.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"The changetype function is called with a type argument of 2 to set the type of the masked points to 2, which changes them to spheres. Since changetype modifies the obj in place, the obj variable is declared as global at the beginning of each loop iteration.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"Finally, the create function is called on the modified obj with a resolution of 0.1 and a rand_ argument of 0.0 to create a mesh of the composite object. The mesh is then written to a file using the write_data function.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"println(\"Creating a composite...\")\nfunction rand_(a, b)\n    return a + rand()*(b-a)\nend\n\nobj = Cuboid([-10 10; -10 10; 0 3])\nfor i in 1:100\n    global obj\n    center = [rand_(-10, 10), rand_(-10, 10), rand_(0, 3)]\n    radius = 0.2 + 1.0*rand()\n    obj = changetype(obj, out -> begin x=out[:x]; mask = sum((x .- vec(center)).^2, dims=1) .< radius^2; mask .& (sum(out[:type][mask[1,:]] .== 2) == 0)  end, 2)\nend\n\nout = create(obj, resolution=0.1, rand_=0.0, type=1)\nwrite_data(\"./output/composite.data\", out)","category":"page"},{"location":"examples.html#Rotating-composite-strip","page":"Examples","title":"Rotating composite strip","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"In this example, a rotating strip is being created by repeatedly modifying a cuboid obj and adding it to the existing object by calling the combine method.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"Initially, obj is set to be a cuboid with dimensions [-5 5; -10 10; 0 3].","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"In each iteration of the for-loop, obj is modified in the following ways:","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"The changetype method is called twice to change the type of some of the point-particles. The first call changes the type of point-particles that satisfy the condition sum(x[1:2, :].^2, dims=1) .< 3.0^2 to 2, and the second call changes the type of point-particles that satisfy the condition sum(x[1:2, :].^2, dims=1) .< 2.0^2 to 3.\nThe move method is called to translate obj by [10.0, 0.0, 0.0].\nThe rotate method is called to rotate obj by an angle of 2 degrees around a point [0.0, 0.0, 0.0] and an axis vector [1.0, 1.0, 0.0].","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"Finally, after the for-loop completes, create method is called to generate the mesh data for the combined object, with a resolution of 0.5 and no random noise, and the result is written to a file named strip.data.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"println(\"Creating rotating strip...\")\nusing PDMesh\nc = Cuboid([-5 5; -10 10; 0 3])\nobj = copy(c)\nfor i in 1:100\n    global obj\n    obj = changetype(obj, out -> begin x=out[:x]; sum(x[1:2, :].^2, dims=1) .< 3.0^2 end, 2)\n    obj = changetype(obj, out -> begin x=out[:x]; sum(x[1:2, :].^2, dims=1) .< 2.0^2 end, 3)\n    obj = move(obj, by=[10.0, 0.0, 0.0])\n    obj = rotate(obj, angle=2, point=[0.0, 0.0, 0.0], vector_=[1.0, 1.0, 0.0])\n    obj = combine(obj, c)\nend\n\nout = create(obj, resolution=0.5, rand_=0.0, type=1)\nwrite_data(\"./output/strip.data\", out)","category":"page"},{"location":"list.html#Index","page":"Index","title":"Index","text":"","category":"section"},{"location":"list.html","page":"Index","title":"Index","text":"Modules = [PDMesh]","category":"page"},{"location":"shapes.html#Shapes","page":"Shapes","title":"Shapes","text":"","category":"section"},{"location":"shapes.html","page":"Shapes","title":"Shapes","text":"Cone\nCuboid\nCube\nCylinder\nDisk\nPyramid(::Any, ::Any)\nIndentor(::Any, ::Any)\nSphere","category":"page"},{"location":"index.html#PDMesh","page":"Home","title":"PDMesh","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"<img src=\"assets/logo.png\" style=\"width:50%;background-color:white;display:block;margin:auto\"/>","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"(Image: Coverage) (Image: Generic badge)","category":"page"},{"location":"index.html#Functionality-of-PDMesh","page":"Home","title":"Functionality of PDMesh","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"PDMesh provides a set of tools to generate meshes of complex geometries and to perform various operations on them. Here are some of the main features:","category":"page"},{"location":"index.html#Shapes","page":"Home","title":"Shapes","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"PDMesh includes a variety of predefined shapes, such as Cuboid, Sphere, Cylinder, Cone, and more. These shapes can be created and modified using various parameters such as resolution, and randomness. For example, here is how to create a sphere:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"using PDMesh\nsphere = create(Sphere(10.0), resolution=0.5, rand_=0.0)","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"This will create a sphere with a radius of 10.0, a resolution of 0.5, and no randomness.","category":"page"},{"location":"index.html#Operations","page":"Home","title":"Operations","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"PDMesh provides several operations that can be performed on meshes, such as rotation, translation, deletion, and more. These operations can be used to modify the shape and position of a mesh. For example, here is how to rotate a mesh:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"using PDMesh\ncube = create(Cube(10.0), resolution=0.5, rand_=0.0)\ncube_rotated = rotate(cube, angle=45, point=[0, 0, 0], vector_=[1, 0, 0])","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"This will create a cube and then rotate it 45 degrees around the x-axis.","category":"page"},{"location":"index.html#Combining-Shapes","page":"Home","title":"Combining Shapes","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"PDMesh allows for combining different shapes together to create more complex geometries. This can be achieved using the combine function. For example, here is how to combine two cubes:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"using PDMesh\n\ncube1 = Cube(4.0)\ncube2 = move(Cube(2.0), by=[3.0, 0.0, 0.0])\n\ncombined = cube1 + cube2\n\nmesh = create(cube; resolution=0.5)","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"This will create two cubes and then combine them into one.","category":"page"},{"location":"index.html#Changing-Mesh-Types","page":"Home","title":"Changing Mesh Types","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"PDMesh provides a changetype function to change the type of elements in a mesh. This can be used to modify the type of a mesh particle. For example, here is how to change the type of all elements in a mesh to 2:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"using PDMesh\nsphere = create(Sphere(10.0), resolution=0.5, rand_=0.0)\nsphere_type2 = changetype(sphere, out -> out[:x][1, :] .> 0.0, 2)","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"This will create a sphere and then change the type of all half of particle to 2.","category":"page"},{"location":"index.html#Writing-to-File","page":"Home","title":"Writing to File","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Finally, PDMesh allows for writing meshes to file in xyz format, here is how to write a mesh to a XYZ file:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"using PDMesh\nsphere = create(Sphere(10.0), resolution=0.5, rand_=0.0)\nwrite_data(\"./output/sphere.data\", out)","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"This will create a sphere and then write it to a XYZ file.","category":"page"},{"location":"index.html#Examples","page":"Home","title":"Examples","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Here are some examples of PDMesh in action:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"Pages = [\n            \"examples.md\",\n        ]\nDepth = 3","category":"page"},{"location":"autodocs.html#Autodocs","page":"Autodocs","title":"Autodocs","text":"","category":"section"},{"location":"autodocs.html","page":"Autodocs","title":"Autodocs","text":"Modules = [PDMesh]","category":"page"},{"location":"autodocs.html#PDMesh.Cone","page":"Autodocs","title":"PDMesh.Cone","text":"Cone\n\nShape object of  type cone.\n\nArgs\n\n- radius : radius of cone\n- length : length of cone\n\nReturns\n\n- obj : Shape object **Cone**.\n\n\n\n\n\n","category":"type"},{"location":"autodocs.html#PDMesh.Cuboid","page":"Autodocs","title":"PDMesh.Cuboid","text":"Cuboid\n\nShape object of  type cuboid.\n\nArgs\n\n- bounds : min, max of cuboid for e.g. [-10 10; 0 3; -2 2]\n\nReturns\n\n- obj : Shape object **Cuboid**.\n\n\n\n\n\n","category":"type"},{"location":"autodocs.html#PDMesh.Cylinder","page":"Autodocs","title":"PDMesh.Cylinder","text":"Cylinder\n\nShape object of  type cylinder.\n\nArgs\n\n- radius : radius of cylinder\n- thickness : thickness of the wall of cylinder\n- length : length of cylinder\n\nReturns\n\n- obj : Shape object **Cylinder**.\n\n\n\n\n\n","category":"type"},{"location":"autodocs.html#PDMesh.Disk","page":"Autodocs","title":"PDMesh.Disk","text":"Disk\n\nShape object of  type disk.\n\nArgs\n\n- radius : radius of disk\n- thickness : length of disk\n\nReturns\n\n- obj : Shape object **disk**.\n\n\n\n\n\n","category":"type"},{"location":"autodocs.html#PDMesh.PostOpObj","page":"Autodocs","title":"PDMesh.PostOpObj","text":"PostOpObj\n\nCreate a post operation object (lazy) from object ( or post operation object)  and an operation. Operations will be applied while a create call.\n\nReturns\n\n- obj : Post operation object (lazy)\n\n\n\n\n\n","category":"type"},{"location":"autodocs.html#PDMesh.Shape","page":"Autodocs","title":"PDMesh.Shape","text":"Shape\nAbstarct shape object.\n\n\n\n\n\n","category":"type"},{"location":"autodocs.html#PDMesh.Sphere","page":"Autodocs","title":"PDMesh.Sphere","text":"Sphere\n\nShape object of  type sphere.\n\nArgs\n\n- radius : radius of sphere\n\nReturns\n\n- obj : Shape object **sphere**.\n\n\n\n\n\n","category":"type"},{"location":"autodocs.html#PDMesh.changetype-Union{Tuple{T}, Tuple{T, Function, Int64}} where T<:Union{PostOpObj, Shape}","page":"Autodocs","title":"PDMesh.changetype","text":"changetype(obj::T, f::Function, ntype::Int64) where T\n\nChange mesh particle type for object using boolean array from function f.\n\n\n\n\n\n","category":"method"},{"location":"autodocs.html#PDMesh.create-Tuple{T} where T<:Shape","page":"Autodocs","title":"PDMesh.create","text":"create(shape::T; resolution=nothing, rand_=0.0, type::Int64=1) where T <: Shape\n\nAbstact function for creating Shape objects.\n\nReturns\n\n- X : Initial reference position \n- V : Initial velocity \n- Y : Initial position \n- volume : Volume per particle point \n- type : Type of particle point\n\n\n\n\n\n","category":"method"},{"location":"autodocs.html#PDMesh.delete-Union{Tuple{T}, Tuple{T, Function}} where T","page":"Autodocs","title":"PDMesh.delete","text":"delete(obj::T, f::Function) where T\n\nDelete mesh particles for object using boolean array from function f.\n\n\n\n\n\n","category":"method"},{"location":"autodocs.html#PDMesh.move-Tuple{T} where T<:Union{PostOpObj, Shape}","page":"Autodocs","title":"PDMesh.move","text":"move(obj::T; by=[0.0, 0.0, 0.0]) where T\n\nMove mesh particles for object by given \"by\".\n\n\n\n\n\n","category":"method"},{"location":"autodocs.html#PDMesh.rotate-Tuple{T} where T<:Union{PostOpObj, Shape}","page":"Autodocs","title":"PDMesh.rotate","text":"rotate(obj::T; angle=0.0, point=[0.0, 0.0, 0.0], vector_=[1.0, 0.0, 0.0]) where T <: Union{Shape, PostOpObj}\n\nRotate shape object by given angle about given vector and point.\n\n\n\n\n\n","category":"method"},{"location":"autodocs.html#PDMesh.velocity-Union{Tuple{T}, Tuple{T, Function, Any}} where T<:Union{PostOpObj, Shape}","page":"Autodocs","title":"PDMesh.velocity","text":"velocity(obj::T, f::Function, vel) where T\n\nChange velocity of particles for object using boolean array from function f.\n\n\n\n\n\n","category":"method"},{"location":"operations.html#Operations","page":"Operations","title":"Operations","text":"","category":"section"},{"location":"operations.html","page":"Operations","title":"Operations","text":"create\nchangetype\ndelete\nmove\nrotate\nvelocity","category":"page"}]
}
