import React, { Component } from 'react'
import './App.css'
import Grid from "./components/Grid";
import NodeLegend from "./components/NodeLegend";
import Figure from "./components/Figure";

type Props = {
}

type State = {
  spoilersVisible: boolean,
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      spoilersVisible: false,
    }
  }

  // noinspection JSMethodCanBeStatic
  renderMainPost() {
    let spoilerOrNot;
    let showSpoilerButton;
    if (!this.state.spoilersVisible) {
      spoilerOrNot = "spoiler";
      // showSpoilerButton = <WidgetButton highlighted={false} onClick={() => { this.setState({criticalThresholdVisible: true}); } } >Show spoilers</WidgetButton>
    } else {
      spoilerOrNot = "spoiler-revealed";
      // showSpoilerButton = <WidgetButton highlighted={false} onClick={() => { this.setState({criticalThresholdVisible: false}); } } >Hide spoilers</WidgetButton>
    }
    showSpoilerButton = <label><span style={{cursor: "pointer"}}><input type="checkbox" value={this.state.spoilersVisible} onChange={(e) => { this.setState({spoilersVisible: e.target.checked}); }}/> Спойлер</span></label>;


    let exposed_you = <code className="code-exposed">вы</code>;

    let susceptible = <code className="code-susceptible">Восприимчив</code>;
    let infected = <code className="code-infectious">Инфецирован</code>;
    let recovered = <code className="code-removed">Выздоровел</code>;
    let dead = <code className="code-dead">Умер</code>;
    let selfQuarantined = <code className="code-quarantined">Самоизолирован</code>;

    // noinspection HtmlRequiredAltAttribute
    return (
      <div className="post-content">
        <div>
          <h1>Вспышка</h1>
          <h5 className="author">by Kevin Simler<br/>16 марта 2020</h5>
        </div>
        <div>
          <span className="deemphasized"><a href="https://www.meltingasphalt.com/interactive/outbreak/">English</a></span><br/>
          <span className="deemphasized"><a href="https://www.podemosaprender.org/brote/">en Español</a></span>
        </div>
        <div>
          <a href="https://twitter.com/Harry_Stevens">Harry Stevens</a> из Washington Post недавно опубликовал <em>очень</em> элегантную симуляцию того, как распространяется инфекция, такая как COVID-19. Если вы до сих пор не прочитали, то рекомендую <a href="https://www.washingtonpost.com/graphics/2020/world/corona-simulator/">Why outbreaks like coronavirus
spread exponentially, and
how to “flatten the curve”</a>.
        </div>
        <div>
          Kevin Simler разработал <strong>игровой симулятор</strong> вспышки инфекции. "Игровой" означает, что вы можете менять параметры распространения (такие как перемещение или уровень смертности) и наблюдать как проходит эпидемия.
        </div>
        <div>
          В конце этой статьи, Кевин надеется, вы лучше поймете, возможно лучше, чем  <em>интуитивно</em>, зачем нужно иметь это ввиду. Но сначала... 
        </div>
        {/*<div>*/}
        {/*  Last year, I wrote a <a href="https://meltingasphalt.com/interactive/going-critical/">viral article about viral growth</a>.*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  It featured <strong>playable simulations</strong> of things that spread across a population. Things like viruses (yes), but also ideas, fashions, and other trends.*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  Today, in light of our current crisis, I wanted a chance to revisit these simulations. And you can play with them in just a moment. But first...*/}
        {/*</div>*/}
        <div>
          <span style={{backgroundColor: '#FFC'}}><strong>ВАЖНОЕ ПРЕДУПРЕЖДЕНИЕ</strong></span>:
        </div>
        <div>
          <strong>Это  <em>не</em> попытка смоделировать распространение COVID-19.</strong>
        </div>
        <div>
          Это <em>упрощенная</em> модель процесса инфецирования. Цель - понять как проходят инфекции <em>в общем случае</em>.
        </div>
        <div>
          <span>ПРЕДУПРЕЖДЕНИЕ №2</span>: Кевин не эпидемиолог! Я полагаюсь на специалистов по инфекционным заболеваниям (может быть это вы). Здесь могут быть ошибки, но они будут исправлены ASAP. Если вы их обнаружите, то <a href="https://meltingasphalt.com/contact/">пишите письма</a>.
        </div>
        <div>
          Всё понятно?
        </div>
        <div>
          Погнали.
        </div>
        <div>
          <h3>Сетка людей</h3>
        </div>
        <div>
          Мы будем строить нашу модель медленно, по частям.
        </div>
        <div>
          Инфекция не может существовать без <strong>популяции</strong>, то есть группы людей, которые потенциально могут заболеть. Наши будут размещены в колонках и строках, как зздесь в поле 9x9:
        </div>
        <Figure>
          <Grid daysIncubating={0}
                daysSymptomatic={1}
                gridRows={9}
                gridCols={9}
                nodeSize={30}
                nug={1}
                randomSeed={100}
                personHours={4}
                showPlaybackControls={false}
                speed={0.4}
                transmissionProbability={1}
                travelRadius={1}
          />
        </Figure>
        <div>
          Каждый квадрат - это человек. Бедняга в середине, как вы можете заметить, {infected}. Предположим, все остальные {susceptible}.
        </div>
        <div>
          <h3>Время</h3>
        </div>
        <div>
          Давай те добавим ВРЕМЯ в нашу модель.
        </div>
        <div>
          Кнопка "Step" (ниже) запускает симуляцию на 1 день. Вы можете нажать кнопку ▷, чтобы посмотреть, что случится в итоге:
        </div>
        <Figure>
          <Grid daysIncubating={0}
                daysSymptomatic={10000000000}
                gridRows={9}
                gridCols={9}
                nodeSize={30}
                nug={1}
                randomSeed={100}
                personHours={4}
                showInteractions={false}
                speed={0.4}
                transmissionProbability={1}
                travelRadius={1}
          />
        </Figure>
        <div>
          О, нет. Выглядит так, как будто каждый заражает своего соседа — сверху, снизу, справа и слева. Весь мир заболеет.
        </div>
        <div>
          <h3>Выздоровление</h3>
        </div>
        <div>
          Люди не могут болеть бесконечно. Давайте посмотрим, что произойдет через два шага ( 2 дня):
        </div>
        <Figure>
          <Grid daysIncubating={0}
                daysSymptomatic={2}
                gridRows={9}
                gridCols={9}
                nodeSize={30}
                nug={1}
                randomSeed={100}
                personHours={4}
                showInteractions={false}
                speed={0.4}
                transmissionProbability={1}
                travelRadius={1}
          />
        </Figure>
        <div>
          Отлично, теперь люди могут переходить из состояния {infected} в {recovered}.
        </div>
        <div>
          Это описание состояний:
        </div>
        <div>
          <ul>
            <li><NodeLegend type="susceptible"/> &nbsp;<b>Восприимчив</b></li>
            <li><NodeLegend type="infected"/> &nbsp;<b>Инфецирован</b></li>
            <li><NodeLegend type="removed"/> &nbsp;<b>Выздоровел</b></li>
          </ul>
        </div>
        <div>
          В целях симуляции, если кто-то {recovered}, он не может заразится снова. Есть надежда и, наверное, это верно для COVID-19, #ноэтонеточно.
        </div>
        <div>
          <h3>Инкубационный период</h3>
        </div>
        <div>
          В обсуждениях COVID-19вы, вероятно, слышали, что у болезни длительный <strong>инкубационный период</strong>. Это время между инфецированием и появлением первых симптомов.
        </div>
        <div>
          В случае с COVID-19 предполагается, что пациенты заразны в это время. Они не могут оценить себя, как больных, но могут заражать окружающих.
        </div>
        <div>
          Добавим это в нашу модель инфекции. (Но помним, что мы не пытаемся смоделировать COVID-19 точно!)
        </div>
        <div>
          Так выглядит инкубационный период:
        </div>
        <Figure>
          <Grid gridRows={25}
                gridCols={25}
                nodeSize={20}
                nug={1}
                randomSeed={100}
                personHours={4}
                showDaysPerStateControls={true}
                showInteractions={false}
                speed={0.4}
                transmissionProbability={1}
                travelRadius={1}
          />
        </Figure>
        <div>
          В этой модели инфекции нет особой разницы между розовым и красным состоянием. Как только инфекция появилась, оба состояния одинаковы.
        </div>
        <div>
          Тем не менее, обратите внимание, что люди в инкубационном периоде являются переносчиками COVID-19. Они не знают, что болеют, не включены в официальную статистику, вообще не переживают, что инфецированны.
        </div>
        <div>
          ... не обеспокоены, что могут заразить других.
        </div>
        <div>
          Когда вы читаете это, {exposed_you} можете быть таким.
        </div>
        <div>
          <ul>
            <li><NodeLegend type="susceptible"/> &nbsp;<b>Восприимчив</b></li>
            <li><NodeLegend type="exposed"/> &nbsp;<b>Инфециорован (Инкубационный период, без симптомов)</b></li>
            <li><NodeLegend type="infected"/> &nbsp;<b>Инфециорван (С симптомами)</b></li>
            <li><NodeLegend type="removed"/> &nbsp;<b>Выздоровел</b></li>
          </ul>
        </div>
        <div>
          <h3>Вероятность заражения</h3>
        </div>
        <div>
          Real diseases don't spread outward with 100 percent certainty. They spread probabilistically.
          Реальная инфекция не передается 100% восприимчивых. Она распространяется с некоторой вероятностью.
        </div>
        <div>
          Введем новый параметр: <strong>вероятность заражения</strong>. Он отвечает за шансы на заражение от человека к человеку.
        </div>
        <div>
          Сможете ли вы найти <strong>вероятность заражения</strong> при которой инфекция не распространится на всю популяцию?
        </div>
        <Figure>
          <Grid gridRows={51}
                gridCols={51}
                maxTransmissionRate={1}
                nodeSize={10}
                nug={5}
                randomSeed={99}
                personHours={4}
                showDaysPerStateControls={true}
                showInteractions={false}
                showProTip={true}
                showTransmissionProbabilitySlider={true}
                speed={0.9}
                transmissionProbability={0.5}
                travelRadius={1}
          />
        </Figure>
        <div>
          Q: Какая  <em>самая большая</em> вероятность заражения при которой инфекция не поразит всю популяцию (то есть не достигнет углов сетки)?
        </div>
        <div style={{marginLeft: '2em'}}>
          {showSpoilerButton}
        </div>
        <div>
          Проведя эксперименты, вы найдете <span className={spoilerOrNot}>0.35</span>, может <span className={spoilerOrNot}>0.34</span>. Тем не менее, инфекция всегда выдыхается. Всегда поражая почти всю сетку.
        </div>
        <div>
          Опишем, как работает передача вируса в нашей модели.
        </div>
        <div>
          Каждый день, каждый человек контактирует с <strong>ограниченным числом</strong> людей рядом.
        </div>
        <div>
          В текущей модели это четыре человека рядом с ним. Изменим это ниже.
        </div>
        <div>
         С каждым контактом, вероятность заражения показывает возможность заражения {susceptible} людей {infected} человеком. Высокая вероятность заражения приводит к долгому существованию инфекции.
        </div>
        <div>
          В реальности, возможно различное число контактов. Вы можете встретить кого-то на улице. Или быть в автобусе с кем-то. Может быть вы угостите кого-то мороженым. В результате каждый из контактов будет заражен с некторой вероятностью. Но в нашей модели, для упрощения, вероятность одна.
        </div>
        <div>
          ——
        </div>
        <div>
          Прежде чем мы продолжим играть и думать о преминимости к COVID-19, держите в голове несколько соображений:
        </div>
        <div>
          Вероятность заражения - это свойство <em>инфекции</em> (зависит от самой инфекции), но существуют свойства <em>окружения</em> в которых инфекция существует. Они включают в себя как свойства среды (например, температура, скорость ветра), так и социальные свойства (например, поведение людей).
        </div>
        <div>
          Например, когда люди моют руки и носят маски, вероятность заражения снижается, но инфекция не изменяется.
        </div>
        <div>
          Теперь для понимания, попробуем найти вероятность заражения при которой инфекция останавливается. Это "critical threshold," вы можете почитать об этом подробнее  <a href="https://meltingasphalt.com/interactive/going-critical">здесь</a>.
      
        </div>
        <div>
          Но COVID-19 - инфекция, для которой сложно достичь "critical transmission rate". Мы можем мыть руки много раз в день. Даже носить маски в местах сколения людей (всё это идет на пользу).
        </div>
        <div>
          Мы <em>можем</em> надевать ОЗК при выходе из дома; технически мы решим проблему заражения (без изменения наших привычек в общении). Но это не очень практично, давайте найдем другой путь, чтобы эпидемия нас не съела.
        </div>
        <div>
          <h3>Поездки</h3>
        </div>
        <div>
          Есть нереалестичное допущение: мы предположили, что люди контактируют только с ближайшими соседями.
        </div>
        <div>
          Что будет, если люди будут перемещаться дальше? (Мы все ещё предполагаем, что у нас 4 контакта в день. Изменим это позже.)
        </div>
        <div>
          Мы добавим слайдер <strong>дальность поездок</strong> и увидим часть контактов центральной клетки, которые происходят каждый день. (Мы не можем отобразить все, положитесь на ваше воображение). В нашей модели в отличии от реальной жизни, контакты каждый день случайные.
        </div>
        <Figure>
          <Grid degree={24}
                gridRows={51}
                gridCols={51}
                maxTransmissionRate={1}
                nodeSize={10}
                nug={5}
                personHours={4}
                randomSeed={99}
                showAliveFraction={true}
                showInteractions={true}
                // showTransmissionProbabilitySlider={true}
                showTravelRadiusSlider={true}
                speed={0.8}
                travelRadius={15}
          />
        </Figure>
        <div>
          Заметьте, что если запретить поездки сразу (например дальность поездок=2), вы замедлите распространение, и это отличная новость.
        </div>
        <div>
          Но, что будет, если вы не ограничите поездки. Инфекция начнет распространяться везде. 
        </div>
        <div>
          Другими словами, чем раньше в кривой заражения вы ограничите поездки, тем успешней вам удасться погасить вспышкую.
        </div>
        <div>
          Давайте попробуем. Начнем с дао=льнось поездок = 25. Запустите симуляцию, поставьте на паузу, когда заразятся примерно 10%. Уменьшите дальность поездок до 2 и запустите. Что случилось?
        </div>
        <div>
          Итого: ограничение перемещений полезно использовать, как можно раньше, для сглаживания кривой.
        </div>
        <div>
          Но ограничение перемещений может помочь даже на последних стадиях по крайней мере по двум причинам:
        </div>
        <div>
          <ol>
            <li>Автобусы, поезда и аэропорты - это места, где люди собираются в ограниченном пространстве. Когда их перестают использовать, снижается число контактов с потенциальными переносчиками инфекции. (Попробуем это позже.)</li>
            <li>Сокращение перемещений весьма эффективно <em>в сочетании с региональными мерами сдерживания</em>.  (Мы не будем их исследовать в этой статье, но если вам интересно, то почитайте <a href="https://necsi.edu/beyond-contact-tracing">здесь</a>.)</li>
          </ol>
        </div>
        <div>
          <h3>Number of encounters</h3>
        </div>
        <div>
          Alright, let's really open this thing up.
        </div>
        <div>
          In the simulation below, you can vary the <strong>encounters per day</strong>.
        </div>
        <div>
          Let's start at 20. What's the minimum value we need to keep the outbreak contained?
        </div>
        <Figure>
          <Grid degree={24}
                gridRows={51}
                gridCols={51}
                personHours={20}
                nodeSize={10}
                nug={5}
                randomSeed={100}
                showAliveFraction={true}
                showInteractions={true}
                showPersonHoursSlider={true}
                showTransmissionProbabilitySlider={true}
                showTravelRadiusSlider={true}
                speed={0.8}
                transmissionProbability={0.3}
                travelRadius={10}
          />
        </Figure>
        {/*<div>*/}
        {/*  Here's another question you might try to answer: <em>For a fixed number of encounters (e.g., 5 per day), how much do you need to reduce the travel radius to keep the disease in check?</em>*/}
        {/*</div>*/}
        <div>
          As you can see, reducing encounters per day has a <em>dramatic effect</em> on the outbreak. It easily flattens the curve, and even has the potential (when taken very seriously) to completely quench an outbreak.
        </div>
        <div>
          This is the effect we're hoping for when we call for "social distance." This is why so many people are pleading with their officials to stop the parades and close the schools, and why all of us should stay away from bars and coffee shops and restaurants, and work from home as much as possible.
        </div>
        <div>
          The NBA did their fans a tremendous service by canceling the rest of the season. Now we need to follow suit and <em>cancel everything</em>.
        </div>
        <div>
          In my understanding (again, not an expert), this is the single most important lever we have for fighting this thing.
        </div>
        <div>
          <h3>Death</h3>
        </div>
        <div>
          Not every patient recovers from a disease. Many end up {dead}.
        </div>
        <div>
          Enter the <strong>fatality rate</strong>.
        </div>
        <div>
          In our simulation, fatality rate is the probability that a patient who gets infected will ultimately die of the infection, assuming they get normal/adequate medical care.
        </div>
        <div>
          <span className="deemphasized">(Update: an earlier version of this article made a distinction between case fatality rate and mortality rate, but failed to define the terms correctly. Collapsing this distinction and using the term "fatality rate" instead.)</span>
        </div>
        <div>
          The fatality rate for COVID-19 has been estimated between 1 percent and <a href="https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30195-X/fulltext">6 percent</a>. It might turn out to be lower than 1 percent, if there are a lot of undiagnosed cases. It's definitely higher when the medical system is overburdened (more on that in a minute).
        </div>
        <div>
          We'll start at a 3 percent fatality rate for our disease model, but you can vary the parameter below:
        </div>
        <Figure>
          <Grid gridRows={101}
                gridCols={101}
                nodeSize={5}
                nug={5}
                randomSeed={100}
                showAliveFraction={true}
                showDeaths={true}
                showDeathRateSlider={true}
                showPersonHoursSlider={true}
                showTransmissionProbabilitySlider={true}
                showTravelRadiusSlider={true}
                speed={1}
                transmissionProbability={0.3}
          />
        </Figure>
        <div>
          Those scattered black dots may not look like much. But remember, each is a human life lost to the disease.
        </div>
        <div>
          <h3>Hospital capacity</h3>
        </div>
        <div>
          Below you'll find one last new slider. It controls <strong>hospital capacity</strong>.
        </div>
        <div>
          This is the number of patients (expressed as a percentage of the population) that can be treated by our medical system at any one time.
        </div>
        <div>
          Why does hospital capacity matter?
        </div>
        <div>
          When there are more patients than the system can handle, they can’t get the treatment they need. And as a result, they have significantly worse outcomes. As we've seen in Italy, some may be left to die in the hallways.
        </div>
        <div>
          I've heard people speak of hospital capacity as the “number of beds,” or “number of ICU beds.” My take is that mere "beds" can be set up in a gymnasium on very short notice. I think the real bottleneck is medical equipment — specifically ventilators. But I'm not sure. Maybe it’s medical personnel.
        </div>
        <div>
          In reality, this matters <em>a lot</em>. We need to identify what the bottleneck is, and do our best to alleviate pressure there. But for a simulation, we can just wave our hands and assume there's limited capacity somewhere in the system. Remember, we're not trying to model reality too carefully.
        </div>
        <div>
          In our disease model, here's how the medical system breaks:
        </div>
        <div>
          <strong>When there are more infections than hospital capacity, the fatality rate <em>doubles</em>.</strong>
        </div>
        <div>
          Give it a try. Pay special attention to the <em>input fatality rate</em> (the value on the slider), which defines how often people die even in the best circumstances, vs. the <em>actual death rate</em> (highlighted below the chart), which tells us how the system behaves under strain.
        </div>
        <Figure>
          <Grid gridRows={101}
                gridCols={101}
                hospitalCapacityPct={0.05}
                nodeSize={5}
                nug={5}
                personHours={15}
                randomSeed={100}
                showAliveFraction={true}
                showDeaths={true}
                showDeathRateSlider={true}
                showHospitalCapacitySlider={true}
                // showPersonHoursSlider={true}
                // showTransmissionProbabilitySlider={true}
                // showTravelRadiusSlider={true}
                speed={1}
                transmissionProbability={0.28}
                travelRadius={15}
          />
        </Figure>
        <div>
          <h3>"Flatten the curve"</h3>
        </div>
        <div>
          You've heard this before. You know why it's important. But now you're about to get a feel for it.
        </div>
        <div>
          This is your final test today.
        </div>
        <div>
          The input fatality rate is fixed at 3 percent. Hospital capacity is fixed at 5 percent.
        </div>
        <div>
          Play out the simulation and note the actual death rate: 6 percent. Then try to bring that number down.
        </div>
        <div>
          In other words, flatten the curve:
        </div>
        <Figure>
          <Grid gridRows={101}
                gridCols={101}
                hospitalCapacityPct={0.05}
                nodeSize={5}
                nug={5}
                personHours={15}
                randomSeed={100}
                showAliveFraction={true}
                showDeaths={true}
                // showDeathRateSlider={true}
                // showHospitalCapacitySlider={true}
                showPersonHoursSlider={true}
                showTransmissionProbabilitySlider={true}
                showTravelRadiusSlider={true}
                speed={1}
                transmissionProbability={0.4}
                travelRadius={15}
          />
        </Figure>
        <div>
          However this worked out for you in simulation, reality is going to be <em>so much harder</em>. Real people don't respond like sliders in a UI.
        </div>
        <div>
          And here's the kicker: even if we manage to "flatten the curve" enough to meaningfully space out the case load, we're still positioned to lose millions and millions of lives.
        </div>
        <div>
          Maybe we won't lose as many as a worst-case scenario; maybe we won't lose them in hospital hallways. But as long as the virus continues to spread — which it shows every sign of doing — there's an unthinkable amount of suffering in our future.
        </div>
        <div>
          Unless we do the right things today.
        </div>
        <div>
          Stop traveling. Stop going out. Stop visiting your parents and your friends. Stop eating at restaurants. Pause everything you possibly can. If you're in charge of things, <em>cancel them</em>. Lock. It. All. Down.
        </div>
        <div>
          Please: take decisive action now.
        </div>
        <div>
          COVID-19 is coming for us, and it won't be stopped by half-measures.
        </div>




        <div>
          &nbsp;
        </div>
        <div>
          &nbsp;
        </div>
        <div>
          ——
        </div>
        <div>
          &nbsp;
        </div>
        {/*<div>*/}
        {/*  Thanks for reading. If this has been helpful, I hope you'll consider sharing.*/}
        {/*</div>*/}
        <div>
          <b>License</b>
        </div>
        <div>
          <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">CC0</a> — no rights reserved. You're free to use this work however you see fit, including copying it, modifying it, and distributing it on your own site.
        </div>
        <div>
          <a href="https://github.com/kevinsimler/outbreak">Source code</a>
        </div>
        <div>
          <b>Full model</b>
        </div>
        <div>
          The full model, with all sliders exposed, can be found at the very bottom of the page.
        </div>
        <div>
          <b>Acknowledgments</b>
        </div>
        <div>
          I'd like to thank <a href="https://twitter.com/nsbarr">Nick Barr</a>, <a href="https://twitter.com/origiful">Ian Padgham</a>, <a href="https://twitter.com/frooblor">Diana Huang</a>, Kellie Jack, <a href="https://twitter.com/btnaughton">Brian Naughton</a>, <a href="https://twitter.com/yaneerbaryam">Yaneer Bar-Yam</a>, and <a href="https://twitter.com/adamdangelo">Adam D'Angelo</a> for helpful feedback and encouragement.
        </div>
        <div>
          <b>Further reading</b>
        </div>
        <div>
          <ul>
            <li><a href="https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca">Coronavirus: Why You Must Act Now</a> — Tomas Pueyo explains why we've been systematically underestimating this thing, and why that needs to change. Just read it.</li>
            <li><a href="https://medium.com/@joschabach/flattening-the-curve-is-a-deadly-delusion-eea324fe9727">Don’t "Flatten the Curve," Stop It!</a> — Joscha Bach does some calculations on hospital capacity and concludes that "flattening the curve" won't be enough; we have to completely stop the outbreak.</li>
            <li>The Washington Post's <a href="https://www.washingtonpost.com/graphics/2020/world/corona-simulator/">excellent simulation</a> — brilliant use of billiard balls to show transmission and social distancing.</li>
            <li><a href="https://meltingasphalt.com/interactive/going-critical/">Going Critical</a> — my previous exploration of diffusion and viral growth processes, including the nuclear reactions and the growth of knowledge.</li>
          </ul>
        </div>

        {this.renderEndOfPostDivider(true)}

        <div className="subscription-footer">
          <a href="https://meltingasphalt.com"><strong>Melting Asphalt</strong></a> is maintained by <span className="nohyphen">Kevin</span> <span className="nohyphen">Simler</span>.<br/><br/> I publish <em>very infrequently</em>, so you might want to get notified about new posts:<br/>
          {this.renderSubscribeForm()}
          {/*<div style={{textAlign: 'center', fontSize: '10pt', color: '#666', marginTop: '0.5em'}}>(This is a <em>very low frequency</em> mailing list. Pinky swear.)</div>*/}
          <br/>You can also <a href="https://twitter.com/KevinSimler"><strong>find me on Twitter</strong></a>.
          <div>&nbsp;</div>
        </div>




        <div>
          &nbsp;
        </div>
        <div>
          <a name="self-quarantine"/>
          <h3>Self-quarantine</h3>
        </div>
        <div>
          (Thanks to <a href="https://twitter.com/jasonlegate">Jason Legate</a> for suggesting and coding this addition to the disease model.)
        </div>
        <div>
          In the simulation below, you can vary the <strong>self-quarantine rate</strong>, i.e., the chance that a patient will choose to isolate themselves once they become symptomatic. Patients who become {selfQuarantined} will be drawn in blue instead of red.
        </div>
        <div>
          Additionally, you can vary how strict they are with the <strong>self-quarantine strictness</strong> parameters. At 100 percent strictness, patients who are isolating themselves have 0 encounters with other people. At 0 percent strictness, they have their normal number of encounters. And it varies linearly in between.
        </div>
        <div>
          Let's start the self-quarantine rate at 25 percent and the strictness also at 25 percent. What does it take to keep the outbreak contained?
        </div>
        <Figure>
          <Grid degree={24}
                gridRows={51}
                gridCols={51}
                personHours={20}
                nodeSize={10}
                nug={5}
                randomSeed={100}
                showAliveFraction={true}
                showInteractions={true}
                showPersonHoursSlider={true}
                showTransmissionProbabilitySlider={true}
                showChanceOfIsolationAfterSymptomsSlider={true}
                showDecreaseInEncountersAfterSymptomsSlider={true}
                showTravelRadiusSlider={true}
                speed={0.8}
                transmissionProbability={0.21}
                travelRadius={20}
          />
        </Figure>
        <div>
          As you can see, if people voluntarily self-quarantine (once they show symptoms) and are strict about isolating themselves, the spread can be mitigated. Unfortunately, because patients are contagious during the incubation period (before they have a chance to notice their own symptoms), it's hard to stop the spread entirely.
        </div>
        <div>
          For most diseases, self-quarantine won't solve the problem on its own. Rather, it's one tool among many (including better hygiene, social distances, travel restrictions, etc.) that <em>all together</em> can bring an outbreak under control. A big lesson here is that every strategy complements every other strategy.
        </div>
        <div>
          <h3>Full model</h3>
        </div>
        <Figure>
          <Grid gridRows={101}
                gridCols={101}
                // highlight="transmissionRate"
                hospitalCapacityPct={0.05}
                nodeSize={5}
                nug={5}
                randomSeed={100}
                showAliveFraction={true}
                showAllControls={true}
                // showDaysPerStateControls={true}
                showDeaths={true}
                // showPersonHoursSlider={true}
                // showTransmissionProbabilitySlider={true}
                // showTravelRadiusSlider={true}
                speed={1}
          />
        </Figure>

      </div>
    );
  }

  renderSubscribeForm() {
    return (
      <form method="post" action="https://meltingasphalt.us8.list-manage.com/subscribe/post?u=0bc9d741e167733d20c520ea6&amp;id=57ebd9b4a6" id="mc4wp-form-1" className="form mc4wp-form"><input type="email" id="mc4wp_email" name="EMAIL" placeholder="Enter your email" required />
        <input type="submit" value="Subscribe" />
        <textarea name="_mc4wp_required_but_not_really" style={{display: "none"}}/><input type="hidden" name="_mc4wp_form_submit" value="1" /><input type="hidden" name="_mc4wp_form_instance" value="1" /><input type="hidden" name="_mc4wp_form_nonce" value="8a45344b67" />
      </form>
    )
  }

  renderEndOfPostDivider(showTimestamp: boolean) {
    let timestamp = "";
    let divider = <span>——</span>;
    if (showTimestamp) {
      timestamp = "Originally published March 16, 2020.";
      divider = <img src="https://meltingasphalt.com/wp-content/themes/responsive/core/images/flourish.svg" width={50} alt="——" />;
    }

    return (
      <div style={{textAlign: "center"}}>
        <div className="end-of-post-divider">
          {divider}
        </div>
        <div className="signature-line">
          {timestamp}
        </div>
      </div>
    );
  }

  renderHeader() {
    return (
        <div id="header">
          <div id="logo" className="branded">
            <span className="site-name">
              <a href="https://meltingasphalt.com/" title="Melting Asphalt" rel="home">
                <img id="nav-logo" src="https://meltingasphalt.com/wp-content/themes/responsive/core/images/ma.svg" />
                                        &nbsp;&nbsp;Melting Asphalt
              </a>
            </span>
          </div>
        </div>
    );
  }

  render() {
    return (
      <div className="main-container">
        <div className="header">
          {this.renderHeader()}
        </div>
        <div className="blank-l"/>
        <div className="content">
          {this.renderMainPost()}
        </div>
        <div className="blank-r"/>
        <div className="footer"/>
      </div>
    );
  }
}

export default App
