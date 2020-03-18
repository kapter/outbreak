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
    let infected = <code className="code-infectious">Инфицирован</code>;
    let recovered = <code className="code-removed">Выздоровел</code>;
    let dead = <code className="code-dead">Умер</code>;
    let selfQuarantined = <code className="code-quarantined">Самоизолирован</code>;

    // noinspection HtmlRequiredAltAttribute
    return (
      <div className="post-content">
        <div>
          <h1>Заражение</h1>
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
          Это <em>упрощенная</em> модель процесса заражения. Цель - понять как проходят инфекции <em>в общем случае</em>.
        </div>
        <div>
          <span>ПРЕДУПРЕЖДЕНИЕ №2</span>: Кевин не эпидемиолог! Надежда на специалистов по инфекционным заболеваниям (может быть это вы). Здесь могут быть ошибки, но они будут исправлены ASAP. Если вы их обнаружите, то <a href="https://meltingasphalt.com/contact/">пишите письма</a>.
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
          Инфекция не может существовать без <strong>популяции</strong>, то есть группы людей, которые потенциально могут заболеть. Наши будут размещены в колонках и строках, как здесь в поле 9x9:
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
          Давайте добавим ВРЕМЯ в нашу модель.
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
            <li><NodeLegend type="infected"/> &nbsp;<b>Инфицирован</b></li>
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
          В обсуждениях COVID-19 вы, вероятно, слышали, что у болезни длительный <strong>инкубационный период</strong>. Это время между заражением и появлением первых симптомов.
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
          Тем не менее, обратите внимание, что люди в инкубационном периоде являются переносчиками COVID-19. Они не знают, что болеют, не включены в официальную статистику, вообще не переживают, что инфицированны.
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
            <li><NodeLegend type="exposed"/> &nbsp;<b>Инфицирован (Инкубационный период, без симптомов)</b></li>
            <li><NodeLegend type="infected"/> &nbsp;<b>Инфицирован (С симптомами)</b></li>
            <li><NodeLegend type="removed"/> &nbsp;<b>Выздоровел</b></li>
          </ul>
        </div>
        <div>
          <h3>Вероятность заражения</h3>
        </div>
        <div>
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
          Есть нереалистичное допущение: мы предположили, что люди контактируют только с ближайшими соседями.
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
          <h3>Количество контактов</h3>
        </div>
        <div>
          Давайте займемся этим.
        </div>
        <div>
          В симуляции, вы можете изменять <strong>Количество контактов в день</strong>.
        </div>
        <div>
          Начнем с 20. Какое минимально число нужно, чтобы инфекция распространялась?
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
          Как вы видите, снижение числа контактов производит <em>невероятный эффект</em> на заражение. Это позволяет сильно сгладить кривую и даже остановить распространение.
        </div>
        <div>
          Этого эффекта мы хотим достичь, держа "социальную дистанцию". Поэтому многие требуют от официальных властей ограничений массовых мероприятий и закрытия учебных заведений, и, поэтому, мы должны держаться подальше от кафе, баров и ресторанов, работать из дома, если это возможно.
        </div>
        <div>
          NBA закрыло сезон, оказав неоценимую услугу своим фанатам. Теперь нужно закрыть всё.
        </div>
        <div>
          Это самая важная вещь в борьбе с инфекцией (это не экспертное мнение).
        </div>
        <div>
          <h3>Смерть</h3>
        </div>
        <div>
          Не все пациенты выздоравливают. Многие умирают {dead}.
        </div>
        <div>
          Добавим <strong>уровень смерности</strong>.
        </div>
        <div>
          В нашей модели, уровень смерности - это вероятность, что пациент умрет от инфекции, учитывая, что он получит нормальное/адекватное медицинское обслуживание.
        </div>
        <div>
          Уровень смерности COVID-19 определен между 1% и <a href="https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30195-X/fulltext">6%</a>. Он может быть ниже 1%, если существует большое количество необнаруженных зараженных. Он увеличивается, если система здравохранения перегружена.
        </div>
        <div>
          Мы начнем с 3%, но вы можете изменить этот параметр:
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
          Черных точек не так много. Но помните, что это человеческая жизнь, которую унесла инфекция.
        </div>
        <div>
          <h3>Вместимость больниц</h3>
        </div>
        <div>
          Ниже мы добавим еще один слайдер. Он отвечает за <strong>вместимость больниц</strong>.
        </div>
        <div>
          Это процент населения, который больницы могут принять одномоментно.
        </div>
        <div>
          Почему это важно?
        </div>
        <div>
          Когда пациентов много, система здравоохранения не справляется, Они не могут осущетвлять лечение в нужном объеме. Как результат, большое количество жертв.
        </div>
        <div>
          Люди говорят о вместимости больниц, как о "количестве кроватей" или как о "количестве кроватей с ИВЛ". Есть мысль, что "кровати" можно расставить где угодно в сжатые сроки. Может быть, реальное узкое место - это ИВЛ. #ноэтонеточно. Может быть, медицинский персонал.
        </div>
        <div>
          В жизни, важно <em>всё это</em>. Мы должны находить узкие места и направлять все усилия на решение проблемы. В симуляции мы не можем указать точно. Ограничимся числом <strong>вместимость больниц</strong>.
        </div>
        <div>
          В модели увидим, как работает перегрузка системы здравоохранения:
        </div>
        <div>
          <strong>Когда количество заразившихся превосходит вместимость, смертность вырастает <em>вдвое</em>.</strong>
        </div>
        <div>
          Попробуем. Обратите особое внимание на <em>уровень смерности</em> , он показывает как изменяется уровень смертности в условиях идеального обслуживания и без него, (график ниже).
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
          <h3>"Сглаживание кривой"</h3>
        </div>
        <div>
          Вы наверняка слышали это раньше. Почему это важно? Сейчас вы получите возможность понять.
        </div>
        
        <div>
          Уровень смерности установлен на 3%. Вместимость больниц равна 5%.
        </div>
        <div>
          Попробуйте и увидите, что реальный уровень смерности 6%. Попробуйте снизить.
        </div>
        <div>
          Другими словами, сгладьте кривую:
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
          Мы играем в симуляции, но реальность <em>намного сложнее</em>. Настоящие люди не ведут себя в соответствии с движениями слайдера на сайте.
        </div>
        <div>
          Гланое: если мы не сгладим кривую, то это может привести к тяжелым последствиям. Мы можем потерять миллионы жизней.
        </div>
        <div>
          Мы не хотим больших потерь. Но пока инфекция распространяется, последствия непредсказуемы. 
        </div>
        <div>
          Мы должны начать действовать прямо сейчас.
        </div>
        <div>
          Не передвигайтесь. Не выходите на улицу. Не ходите в гости и не приглашайте к себе (даже родителей). Остановите все активности, которые могут представлять опасность. Если что-то запланировали - <em>отменяйте</em>. Закройтесь. Полностью.
        </div>
        <div>
          Пожалуйста, делайте всё возможное.
        </div>
        <div>
          COVID-19 пришёл, и его не остановить полумерами.
        </div>







        <div>
          &nbsp;
        </div>
        <div>
          <a name="self-quarantine"/>
          <h3>Самоизоляция</h3>
        </div>
        <div>
          (Thanks to <a href="https://twitter.com/jasonlegate">Jason Legate</a> for suggesting and coding this addition to the disease model.)
        </div>
        <div>
          В этой модели, вы можете изменить <strong>уровень самоизоляции</strong>, например, человек самоизолируется, как только почувствует симптомы. {selfQuarantined} будут окрашены синим вместо красного.
        </div>
        <div>
          Дополнительно, вы можете изменять <strong>строгость самоизоляции</strong>. 100 процентов означает, что число контактов пациента рано 0. 0% означает, что он контактирует в обычном режиме. Функция между значениями линейная.
        </div>
        <div>
          Начнем с 25% на самоизоляции и строгостью 25%. Поможет ли это остановить инфекцию?
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
          Как вы видите, добровольная самоизоляция (при появлении симптомов), останавливает распространение. К сожалению, симптомы появляются позже, чем человек становится переносчиком инфекции. Поэтому, её сложно остановить.
        </div>
        <div>
          Для большинства инфекций, самоизоляция не решает проблему. Но это один из способов, не исключающий многих других (лучшую гигиену, ограничение общения и перемещений). Мы <em>вместе</em> можем начать контролировать распространение. 
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
          <a href="https://twitter.com/kapter666">Перевод на русский: @kapter666</a>
        </div>
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
          <h3>Полная модель</h3>
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
