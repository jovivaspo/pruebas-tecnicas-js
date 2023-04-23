Problema 1:
Fórmula = (coste por min. * tiempo de la carrera) + (coste por milla * distancia de la carrera)

Coste por min. y coste por milla depende del tipo de coche

Example:

ride_time = 30
ride_distance = 7
cost_per_minute = [0.2, 0.35, 0.4, 0.45]
const_per_mile = [1.1, 1.8, 2.3, 3.5]

solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) = [13.7, 23.1, 28.1, 38]

Devolver la solución para cada tipo de coche

Problema 2:

length of your ride = l
cost of one mile for each car [0.3 , 0.5 , 0.7 , 1, 1.3]
options ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV]

solution(l, fares) = "UberXL"


