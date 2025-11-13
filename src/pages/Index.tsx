import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">NAA Visuals</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-accent transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-accent transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-accent transition-colors">
                Цены
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-accent transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('application')} className="bg-accent hover:bg-accent/90">
              Оставить заявку
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Мобильный дизайнер нового поколения
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Микс мобильных технологий, креатива и искусственного интеллекта. Это не просто дизайн — это новая скорость визуала
          </p>
          <Button onClick={() => scrollToSection('application')} size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
            Заказать проект
          </Button>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-primary mb-4 text-center">Портфолио</h3>
          <p className="text-center text-muted-foreground mb-12">Примеры наших работ</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/16cf802f-c8ee-43ec-9e47-9628d5756cd0/files/4b57c13b-dd10-4216-b399-8cfa047203d7.jpg" 
                  alt="Профессиональный дизайнер инфографики"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Анастасия Никольская</CardTitle>
                <CardDescription>
                  Создаю продающую инфографику для маркетплейсов, обрабатываю фото и делаю презентации в трендовых стилях
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="overflow-hidden hover:shadow-lg transition-all hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/16cf802f-c8ee-43ec-9e47-9628d5756cd0/files/afaf2118-c86a-4f24-8c11-20f359fa34aa.jpg" 
                    alt="Аналитическая инфографика"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">Аналитика</CardTitle>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-all hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/16cf802f-c8ee-43ec-9e47-9628d5756cd0/files/01b25693-e255-459c-9b1c-07f49e7fc362.jpg" 
                    alt="Маркетинговая инфографика"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">Маркетинг</CardTitle>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-all hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                  <Icon name="BookOpen" size={32} className="text-accent" />
                </div>
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">Обучение</CardTitle>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-all hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                  <Icon name="Presentation" size={32} className="text-accent" />
                </div>
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">Презентации</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-primary mb-4 text-center">Услуги</h3>
          <p className="text-center text-muted-foreground mb-12">Что мы предлагаем</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="PieChart" size={24} className="text-accent" />
                </div>
                <CardTitle>Аналитическая инфографика</CardTitle>
                <CardDescription className="mt-2">
                  Визуализация данных, графики, диаграммы для отчетов и презентаций
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-accent" />
                </div>
                <CardTitle>Маркетинговая инфографика</CardTitle>
                <CardDescription className="mt-2">
                  Креативные визуалы для социальных сетей и рекламных кампаний
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={24} className="text-accent" />
                </div>
                <CardTitle>Образовательная инфографика</CardTitle>
                <CardDescription className="mt-2">
                  Инфографика для обучения, схемы процессов и руководства
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-primary mb-4 text-center">Цены</h3>
          <p className="text-center text-muted-foreground mb-12">Прозрачные тарифы под ваши задачи</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <CardTitle>Базовый</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">от 5000₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Простая инфографика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>До 5 элементов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>1 правка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Срок: 3 дня</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent border-2 hover:shadow-xl transition-all hover:scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardHeader>
                <CardTitle>Стандарт</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">от 12000₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Комплексная инфографика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>До 15 элементов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>3 правки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Срок: 5 дней</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <CardTitle>Премиум</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">от 25000₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Эксклюзивный дизайн</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Без ограничений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Неограниченные правки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Срок: индивидуально</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="application" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl font-bold text-primary mb-4 text-center">Оставить заявку</h3>
          <p className="text-center text-muted-foreground mb-12">Свяжемся с вами в течение 24 часов</p>
          
          <Card className="animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем проекте..."
                    className="mt-2 min-h-32"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-primary mb-12 text-center">Контакты</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
                <CardDescription className="mt-2">
                  info@infographic.ru
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
                <CardTitle className="text-lg">Телефон</CardTitle>
                <CardDescription className="mt-2">
                  +7 (999) 123-45-67
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <CardTitle className="text-lg">Офис</CardTitle>
                <CardDescription className="mt-2">
                  Москва, ул. Примерная, 1
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Инфографика. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;