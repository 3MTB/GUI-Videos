class People:
    def __init__(self, firstName, lastName, age, country):
        self.firstName = firstName;
        self.lastName = lastName;
        self.age = age;
        self.country = country;
    def getData(self):
        print(f'First Name: {self.firstName} \n Last Name: {self.lastName} \n Age: {self.age} \n Country: {self.country}')


eury = People('Eury', 'Tejada',19,'Dominican Republic')
#print(People('Eury', 'Tejada',19,'Dominican Republic').getData())


phrase = 'Soy TEXto'
print(f'Valor de la varibale phrase Antes de Lower: {phrase} ---------Linea 16')

# phrase.Lower() creara una copia de loq ue contiene
#  la variable phrase pero lo pasara a minuscula
Minuscula = phrase.lower(); 
# En este punto, Minuscula = 'soy texto' , 
# pero phrase sigue sin cambiar su valor: phrase = 'Soy TEXto'
print(f'Valor de la varibale phrase despues de Lower: {phrase}---------Linea 23')
print(f'Valor de la varibale Minuscula: {phrase}---------Linea 24')
