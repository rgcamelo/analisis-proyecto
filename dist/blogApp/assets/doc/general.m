syms x;
Cx=input('Ingrese la Funcion Cx: ');
pretty(Cx);
yf=inline(Cx);
x0=input('Digite el Valor Minimo de x0: ');
h=input('Digite el Valor de h: ');
AD=(-yf(x0+2*h)+4*(yf(x0+h))-3*(yf(x0)))/2*h;
CN=(-yf(x0+2*h)+16*(yf(x0+h))-30*yf(x0)+16*(yf(x0-h))-(yf(x0-2*h))/12*(h^2));
AT=2*yf(x0)-5*(yf(x0-h))+4*(yf(x0-2*h))-(yf(x0-3*h))/(h^2);
disp([AD AT CN])