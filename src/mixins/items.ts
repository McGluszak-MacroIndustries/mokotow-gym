/* eslint-disable */
import { ref } from "vue";

export type Item = {
  name: string;
  title: string;
  description: string;
  src: string;
};

export const isEnglishLanguageOn = ref<boolean>(false);

export const privacyPolitics: Array<Item> = [
  {
    name: "privacy",
    title: "Polityka prywatności",
    description: `POLITYKA OCHRONY DANYCH OSOBOWYCH

    (Q) Kim jesteśmy?
    (A) Klubem fitness.
    
    (Q) Co to są dane osobowe?
    (A) Dane osobowe - oznaczają wszelkie informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej ("osobie, której dane dotyczą"); możliwa do zidentyfikowania osoba fizyczna to osoba, którą można bezpośrednio lub pośrednio zidentyfikować, w szczególności na podstawie identyfikatora takiego jak imię i nazwisko, numer identyfikacyjny, dane o lokalizacji, identyfikator internetowy lub jeden bądź kilka
    szczególnych czynników określających fizyczną, fizjologiczną, genetyczną, psychiczną,
    ekonomiczną, kulturową lub społeczną tożsamość osoby fizycznej.
    
    (Q) Po co przetwarzamy dane osobowe?
    (A) Dane osobowe przetwaramy w celu umożliwienia zapisania się na nasze usługi (np. kupno karnetu, odebranie wejścia na darmowy trening)
    
    
    Kontakt
    1. Niniejszy dokument zatytułowany „Polityka ochrony danych osobowych” (dalej jako Polityka) ma za zadanie stanowić mapę wymogów, zasad i regulacji ochrony danych osobowych w McGłuszak MacroIndustries Sp z o.o, ul. Warszawska 6m32, 15-063 Białystok, NIP: 9662116841, KRS: 0000716731, REGON: 368770856.
    Niniejsza Polityka jest polityką ochrony danych osobowych w rozumieniu 
    RODO  – rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z 27.04.2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
    (ogólne rozporządzenie o ochronie danych) (Dz.Urz. UE L 119, s. 1).
    2. Polityka zawiera:
    a) opis zasad ochrony danych obowiązujących w Spółce;
    b) odwołania do załączników uszczegóławiających (wzorcowe procedury lub instrukcje dotyczące poszczególnych obszarów z zakresu ochrony danych osobowych wymagających doprecyzowania w odrębnych dokumentach);
    3. Odpowiedzialny za wdrożenie i utrzymanie niniejszej Polityki jest Zarząd Spółki, a w ramach Zarządu:
    (i) Członek Zarządu, któremu powierzono nadzór nad obszarem ochrony danych
    osobowych;
    (ii) osoba wyznaczona przez Zarząd do zapewnienia zgodności z ochrona danych osobowych;
    
    za nadzór i monitorowanie przestrzegania Polityki odpowiadają:
    (iii) Inspektor Ochrony Danych, jeżeli został powołany w Spółce;
    (iv) komórka audytu wewnętrznego, jeżeli funkcjonuje w Spółce;
    za stosowanie niniejszej Polityki odpowiedzialni są:
    (v) Spółka;
    (vi) komórka organizacyjna odpowiedzialna za obszar bezpieczeństwa informacji;
    (vii) komórki organizacyjne przetwarzające dane osobowe w dużym rozmiarze;
    (viii) pozostałe komórki organizacyjne;
    (ix) wszyscy członkowie personelu Spółki.
    Spółka powinna też zapewnić zgodność postępowania kontrahentów Spółki z niniejszą
    Polityką w odpowiednim zakresie, gdy dochodzi do przekazania im danych osobowych przez Spółkę.
    
    4. Skróty i definicje:
    Polityka oznacza niniejszą Politykę ochrony danych osobowych, o ile co innego nie
    wynika wyraźnie z kontekstu. 
    RODO oznacza rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z 27.04.2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) (Dz.Urz. UE L 119, s. 1).
    Dane oznaczają dane osobowe, o ile co innego nie wynika wyraźnie z kontekstu.
    Dane wrażliwe oznaczają dane specjalne i dane karne.
    Dane specjalne oznaczają dane wymienione w art. 9 ust. 1 RODO, tj. dane osobowe
    ujawniające pochodzenie rasowe lub etniczne, poglądy polityczne, przekonania religijne
    lub światopoglądowe, przynależność do związków zawodowych, dane genetyczne,
    biometryczne w celu jednoznacznego zidentyfikowania osoby fizycznej lub dane
    dotyczące zdrowia, seksualności lub orientacji seksualnej.
    Dane karne oznaczają dane wymienione w art. 10 RODO, tj. dane dotyczące wyroków
    skazujących i naruszeń prawa.
    Dane dzieci oznaczają dane osób poniżej 16. roku życia.
    Osoba oznacza osobę, której dane dotyczą, o ile co innego nie wynika wyraźnie z
    kontekstu.
    Podmiot przetwarzający oznacza organizację lub osobę, której Spółka powierzyła
    przetwarzanie danych osobowych (np. usługodawca IT, zewnętrzna księgowość).
    Profilowanie oznacza dowolną formę zautomatyzowanego przetwarzania danych
    osobowych, które polega na wykorzystaniu danych osobowych do oceny niektórych
    czynników osobowych osoby fizycznej, w szczególności do analizy lub prognozy
    aspektów dotyczących efektów pracy tej osoby fizycznej, jej sytuacji ekonomicznej,
    zdrowia, osobistych preferencji, zainteresowań, wiarygodności, zachowania, lokalizacji
    lub przemieszczania się.
    Eksport danych oznacza przekazanie danych do państwa trzeciego lub organizacji
    międzynarodowej.
    IOD lub Inspektor oznacza Inspektora Ochrony Danych Osobowych
    RCPD lub Rejestr oznacza Rejestr Czynności Przetwarzania Danych Osobowych.
    Spółka oznacza spółkę McGłuszak MacroIndustries Sp z o.o, ul. Warszawska 6m32, 15-063 Białystok, NIP: 9662116841, KRS: 0000716731, REGON: 368770856.
    
    5. Ochrona danych osobowych w Spółce – zasady ogólne
    5.1. Filary ochrony danych osobowych w Spółce:
    (1) Legalność − Spółka dba o ochronę prywatności i przetwarza dane zgodnie z
    prawem.
    (2) Bezpieczeństwo − Spółka zapewnia odpowiedni poziom bezpieczeństwa
    danych podejmując stale działania w tym zakresie.
    (3) Prawa Jednostki − Spółka umożliwia osobom, których dane przetwarza,
    wykonywanie swoich praw i prawa te realizuje.
    (4) Rozliczalność − Spółka dokumentuje to, w jaki sposób spełnia obowiązki, aby
    w każdej chwili móc wykazać zgodność.
    5.2. Zasady ochrony danych
    Spółka przetwarza dane osobowe z poszanowaniem następujących zasad:
    (1) w oparciu o podstawę prawną i zgodnie z prawem (legalizm);
    (2) rzetelnie i uczciwie (rzetelność);
    (3) w sposób przejrzysty dla osoby, której dane dotyczą (transparentność);
    (4) w konkretnych celach i nie „na zapas” (minimalizacja);
    (5) nie więcej niż potrzeba (adekwatność);
    (6) z dbałością o prawidłowość danych (prawidłowość);
    (7) nie dłużej niż potrzeba (czasowość);
    (8) zapewniając odpowiednie bezpieczeństwo danych (bezpieczeństwo).
    5.3. System ochrony danych
    System ochrony danych osobowych w Spółce składa się z następujących elementów:
    1) Inwentaryzacja danych. Spółka dokonuje identyfikacji zasobów danych osobowych w
    Spółce, klas danych, zależności między zasobami danych, identyfikacji sposobów
    wykorzystania danych (inwentaryzacja), w tym:
    a) przypadków przetwarzania danych specjalnych i danych „kryminalnych” (dane
    wrażliwe);
    b) przypadków przetwarzania danych osób, których Spółka nie identyfikuje (dane
    niezidentyfikowane);
    c) przypadków przetwarzania danych dzieci;
    d) profilowania;
    e) współadministrowania danymi.
    2) Rejestr. Spółka opracowuje, prowadzi i utrzymuje Rejestr Czynności Danych Osobowych
    w Spółce (Rejestr). Rejestr jest narzędziem rozliczania zgodności z ochroną danych w
    Spółce.
    3) Podstawy prawne. Spółka zapewnia, identyfikuje, weryfikuje podstawy prawne
    przetwarzania danych i rejestruje je w Rejestrze, w tym:
    a) utrzymuje system zarządzania zgodami na przetwarzanie danych i komunikację na
    odległość,
    b) inwentaryzuje i uszczegóławia uzasadnienie przypadków, gdy Spółka przetwarza dane
    na podstawie prawnie uzasadnionego interesu Spółki.
    4) Obsługa praw jednostki. Spółka spełnia obowiązki informacyjne względem osób,
    których dane przetwarza, oraz zapewnia obsługę ich praw, realizując otrzymane w tym
    zakresie żądania, w tym:
    a) Obowiązki informacyjne. Spółka przekazuje osobom prawem wymagane informacje
    przy zbieraniu danych i w innych sytuacjach oraz organizuje i zapewnia
    udokumentowanie realizacji tych obowiązków.
    b) Możliwość wykonania żądań. Spółka weryfikuje i zapewnia możliwość efektywnego
    wykonania każdego typu żądania przez siebie i swoich przetwarzających.
    c) Obsługa żądań. Spółka zapewnia odpowiednie nakłady i procedury, aby żądania osób
    były realizowane w terminach i w sposób wymagany RODO i dokumentowane.
    d) Zawiadamianie o naruszeniach. Spółka stosuje procedury pozwalające na ustalenie
    konieczności zawiadomienia osób dotkniętych zidentyfikowanym naruszeniem
    ochrony danych.
    5) Minimalizacja. Spółka posiada zasady i metody zarządzania minimalizacją (privacy by
    default), a w tym:
    a) zasady zarządzania adekwatnością danych;
    b) zasady reglamentacji i zarządzania dostępem do danych;
    c) zasady zarządzania okresem przechowywania danych i weryfikacji dalszej
    przydatności;
    6) Bezpieczeństwo. Spółka zapewnia odpowiedni poziom bezpieczeństwa danych, w tym:
    a) przeprowadza analizy ryzyka dla czynności przetwarzania danych lub ich kategorii;
    b) przeprowadza oceny skutków dla ochrony danych tam, gdzie ryzyko naruszenia praw i
    wolności osób jest wysokie;
    c) dostosowuje środki ochrony danych do ustalonego ryzyka;
    d) posiada system zarządzania bezpieczeństwem informacji;
    e) stosuje procedury pozwalające na identyfikację, ocenę i zgłoszenie zidentyfikowanego
    naruszenia ochrony danych Urzędowi Ochrony Danych − zarządza incydentami.
    7) Przetwarzający. Spółka posiada zasady doboru przetwarzających dane na rzecz Spółki,
    wymogów co do warunków przetwarzania (umowa powierzenia), zasad weryfikacji
    wykonywania umów powierzenia.
    8) Eksport danych. Spółka nie przekazuje danych do państw trzecich (czyli poza UE,
    Norwegię, Lichtenstein, Islandię) lub do organizacji międzynarodowych.
    9) Privacybydesign. Spółka zarządza zmianami mającymi wpływ na prywatność. W tym
    celu procedury uruchamiania nowych projektów i inwestycji w Spółce uwzględniają
    konieczność oceny wpływu zmiany na ochronę danych, zapewnienie prywatności (a w tym
    zgodności celów przetwarzania, bezpieczeństwa danych i minimalizacji) już w fazie
    projektowania zmiany, inwestycji czy na początku nowego projektu.
    10) Przetwarzanie transgraniczne. Spółka nie dokonuje transgranicznego przetwarzania
    danych osobowych.
    6. Inwentaryzacja
    6.1. Dane wrażliwe
    Spółka identyfikuje przypadki, w których przetwarza lub może przetwarzać dane wrażliwe
    (dane specjalne i dane karne) oraz utrzymuje dedykowane mechanizmy zapewnienia
    zgodności z prawem przetwarzania danych wrażliwych. W przypadku zidentyfikowania
    przypadków przetwarzania danych wrażliwych, Spółka postępuje zgodnie z przyjętymi
    zasadami w tym zakresie.
    6.2. Dane niezidentyfikowane
    Spółka identyfikuje przypadki, w których przetwarza lub może przetwarzać dane
    niezidentyfikowane i utrzymuje mechanizmy ułatwiające realizację praw osób, których
    dotyczą dane niezidentyfikowane.
    6.3. Profilowanie
    Spółka identyfikuje przypadki, w których dokonuje profilowania przetwarzanych danych i
    utrzymuje mechanizmy zapewniające zgodność tego procesu z prawem. W przypadku
    zidentyfikowania przypadków profilowania i zautomatyzowanego podejmowania decyzji,
    Spółka postępuje zgodnie z przyjętymi zasadami w tym zakresie.
    6.4. Współadministrowanie
    Spółka identyfikuje przypadki współadministrowania danymi i postępuje w tym zakresie
    zgodnie z przyjętymi zasadami.
    7. Rejestr Czynności Przetwarzania Danych
    7.1. RCPD stanowi formę dokumentowania czynności przetwarzania danych, pełni rolę
    mapy przetwarzania danych i jest jednym z kluczowych elementów umożliwiających
    realizację fundamentalnej zasady, na której opiera się cały system ochrony danych
    osobowych, czyli zasady rozliczalności.
    7.2. Spółka prowadzi Rejestr Czynności Przetwarzania Danych, w którym inwentaryzuje i
    monitoruje sposób, w jaki wykorzystuje dane osobowe.
    7.3. Rejestr jest jednym z podstawowych narzędzi umożliwiających Spółce rozliczanie
    większości obowiązków ochrony danych.
    7.4. W Rejestrze, dla każdej czynności przetwarzania danych, którą Spółka uznała za
    odrębną dla potrzeb Rejestru, Spółka odnotowuje co najmniej: (i) nazwę czynności,
    (ii) cel przetwarzania, (iii) opis kategorii osób, (iv) opis kategorii danych, (v)
    podstawę prawną przetwarzania, wraz z wyszczególnieniem kategorii uzasadnionego
    interesu Spółki, jeśli podstawą jest uzasadniony interes, (vi) sposób zbierania danych,
    (vii) opis kategorii odbiorców danych (w tym przetwarzających), (viii) informację o
    przekazaniu poza EU/EOG; (ix) ogólny opis technicznych i organizacyjnych środków
    ochrony danych.
    8. Podstawy przetwarzania
    8.1. Spółka dokumentuje w Rejestrze podstawy prawne przetwarzania danych dla
    poszczególnych czynności przetwarzania.
    8.2. Wskazując ogólną podstawę prawną (zgoda, umowa, obowiązek prawny, żywotne
    interesy, zadanie publiczne/władza publiczna, uzasadniony cel Spółki) Spółka
    dookreśla podstawę w czytelny sposób, gdy jest to potrzebne. Np. dla zgody
    wskazując na jej zakres, gdy podstawą jest prawo – wskazując na konkretny przepis i
    inne dokumenty, np. umowę, porozumienie administracyjne, żywotne interesy –
    wskazując na kategorie zdarzeń, w których się zmaterializują, uzasadniony cel –
    wskazując na konkretny cel, np. marketing własny, dochodzenie roszczeń.
    8.3. Spółka wdraża metody zarządzania zgodami umożliwiające rejestrację i weryfikację
    posiadania zgody osoby na przetwarzanie jej konkretnych danych w konkretnym celu,
    zgody na komunikację na odległość (email, telefon, sms, in.) oraz rejestrację odmowy
    zgody, cofnięcia zgody i podobnych czynności (sprzeciw, ograniczenie itp.).
    8.4. Kierownik komórki organizacyjnej Spółki ma obowiązek znać podstawy prawne, na
    jakich komórka przez niego kierowana dokonuje konkretnych czynności
    przetwarzania danych osobowych. Jeżeli podstawą jest uzasadniony interes Spółki,
    kierownik komórki ma obowiązek znać konkretny realizowany przetwarzaniem
    interes Spółki.
    9. Sposób obsługi praw jednostki i obowiązków informacyjnych
    9.1. Spółka dba o czytelność i styl przekazywanych informacji i komunikacji z osobami,
    których dane przetwarza.
    9.2. Spółka ułatwia osobom korzystanie z ich praw poprzez różne działania, w tym:
    zamieszczenie na stronie internetowej Spółki informacji lub odwołań (linków) do
    informacji o prawach osób, sposobie skorzystania z nich w Spółce, w tym
    wymaganiach dotyczących identyfikacji, metodach kontaktu ze Spółką w tym celu,
    ewentualnym cenniku żądań „dodatkowych” itp.
    9.3. Spółka dba o dotrzymywanie prawnych terminów realizacji obowiązków względem
    osób.
    9.4. Spółka wprowadza adekwatne metody identyfikacji i uwierzytelniania osób dla
    potrzeb realizacji praw jednostki i obowiązków informacyjnych.
    9.5. W celu realizacji praw jednostki Spółka zapewnia procedury i mechanizmy
    pozwalające zidentyfikować dane konkretnych osób przetwarzane przez Spółkę,
    zintegrować te dane, wprowadzać do nich zmiany i usuwać w sposób zintegrowany,
    9.6. Spółka dokumentuje obsługę obowiązków informacyjnych, zawiadomień i żądań
    osób.
    10. Obowiązki informacyjne
    10.1. Spółka określa zgodne z prawem i efektywne sposoby wykonywania obowiązków
    informacyjnych.
    10.2. Spółka informuje osobę o przedłużeniu ponad jeden miesiąc terminu na rozpatrzenie
    żądania tej osoby.
    10.3. Spółka informuje osobę o przetwarzaniu jej danych, przy pozyskiwaniu danych od tej
    osoby.
    10.4. Spółka informuje osobę o przetwarzaniu jej danych, przy pozyskiwaniu danych o tej
    osobie niebezpośrednio od niej.
    10.5. Spółka określa sposób informowania osób o przetwarzaniu danych
    niezidentyfikowanych, tam gdzie to jest możliwe (np. tabliczka o objęciu obszaru
    monitoringiem wizyjnym).
    10.6. Spółka informuje osobę o planowanej zmianie celu przetwarzania danych.
    10.7. Spółka informuje osobę przed uchyleniem ograniczenia przetwarzania.
    10.8. Spółka informuje odbiorców danych o sprostowaniu, usunięciu lub ograniczeniu
    przetwarzania danych (chyba że będzie to wymagało niewspółmiernie dużego wysiłku
    lub będzie niemożliwe).
    10.9. Spółka informuje osobę o prawie sprzeciwu względem przetwarzania danych
    najpóźniej przy pierwszym kontakcie z tą osobą.
    10.10. Spółka bez zbędnej zwłoki zawiadamia osobę o naruszeniu ochrony danych
    osobowych, jeżeli może ono powodować wysokie ryzyko naruszenia praw lub
    wolności tej osoby.
    11. Żądania osób
    11.1. Prawa osób trzecich. Realizując prawa osób, których dane dotyczą, Spółka
    wprowadza proceduralne gwarancje ochrony praw i wolności osób trzecich. W
    szczególności w przypadku powzięcia wiarygodnej wiadomości o tym, że wykonanie
    żądania osoby o wydanie kopii danych lub prawa do przeniesienia danych może
    niekorzystnie wpłynąć na prawa i wolności innych osób (np. prawa związane z
    ochroną danych innych osób, dobra osobiste itp.), Spółka może zwrócić się do osoby
    w celu wyjaśnienia wątpliwości lub podjąć inne prawem dozwolone kroki, łącznie z
    odmową zadośćuczynienia żądaniu.
    11.2. Nieprzetwarzanie. Spółka informuje osobę o tym, że nie przetwarza danych jej
    dotyczących, jeśli taka osoba zgłosiła żądanie dotyczące jej praw.
    11.3. Odmowa. Spółka informuje osobę, w ciągu miesiąca od otrzymania żądania, o
    odmowie rozpatrzenia żądania i o prawach osoby z tym związanych.
    11.4. Dostęp do danych. Na żądanie osoby dotyczące dostępu do jej danych, Spółka
    informuje osobę, czy przetwarza jej dane oraz informuje osobę o szczegółach
    przetwarzania, zgodnie z art. 15 RODO (zakres odpowiada obowiązkowi
    informacyjnemu przy zbieraniu danych), a także udziela osobie dostępu do danych jej
    dotyczących. Dostęp do danych może być zrealizowany przez wydanie kopii danych,
    z zastrzeżeniem, że kopii danych wydanej w wykonaniu prawa dostępu do danych
    Spółka nie uzna za pierwszą nieodpłatną kopię danych dla potrzeb opłat za kopie
    danych.
    11.5. Kopie danych. Na żądanie Spółka wydaje osobie kopię danych jej dotyczących i
    odnotowuje fakt wydania pierwszej kopii danych. Spółka wprowadza i utrzymuje
    cennik kopii danych, zgodnie z którym pobiera opłaty za kolejne kopie danych. Cena
    kopii danych skalkulowana jest w oparciu o oszacowany jednostkowy koszt obsługi
    żądania wydania kopii danych.
    11.6. Sprostowanie danych. Spółka dokonuje sprostowania nieprawidłowych danych na
    żądanie osoby. Spółka ma prawo odmówić sprostowania danych, chyba że osoba w
    rozsądny sposób wykaże nieprawidłowości danych, których sprostowania się domaga.
    W przypadku sprostowania danych Spółka informuje osobę o odbiorcach danych, na
    żądanie tej osoby.
    11.7. Uzupełnienie danych. Spółka uzupełnia i aktualizuje dane na żądanie osoby. Spółka
    ma prawo odmówić uzupełnienia danych, jeżeli uzupełnienie byłoby niezgodne z
    celami przetwarzania danych (np. Spółka nie musi przetwarzać danych, które są
    Spółce zbędne). Spółka może polegać na oświadczeniu osoby, co do uzupełnianych
    danych, chyba że będzie to niewystarczające w świetle przyjętych przez Spółkę
    procedur (np. co do pozyskiwania takich danych), prawa lub zaistnieją podstawy, aby
    uznać oświadczenie za niewiarygodne.
    7
    11.8. Usunięcie danych. Na żądanie osoby, Spółka usuwa dane, gdy:
    (1) dane nie są niezbędne do celów, w których zostały zebrane ani przetwarzane w
    innych celach,
    (2) zgoda na ich przetwarzanie została cofnięta, a nie ma innej podstawy prawnej
    przetwarzania,
    (3) osoba wniosła skuteczny sprzeciw względem przetwarzania tych danych,
    (4) dane były przetwarzane niezgodnie z prawem,
    (5) konieczność usunięcia wynika z obowiązku prawnego,
    (6) żądanie dotyczy danych dziecka zebranych na podstawie zgody w celu
    świadczenia usług społeczeństwa informacyjnego oferowanych bezpośrednio
    dziecku (np. profil dziecka na portalu społecznościowym, udział w konkursie na
    stronie internetowej).
    Spółka określa sposób obsługi prawa do usunięcia danych w taki sposób, aby
    zapewnić efektywną realizację tego prawa przy poszanowaniu wszystkich zasad
    ochrony danych, w tym bezpieczeństwa, a także weryfikację, czy nie zachodzą
    wyjątki, o których mowa w art. 17. ust. 3 RODO.
    Jeżeli dane podlegające usunięciu zostały upublicznione przez Spółkę, Spółka
    podejmuje rozsądne działania, w tym środki techniczne, by poinformować innych
    administratorów przetwarzających te dane osobowe, o potrzebie usunięcia danych i
    dostępu do nich.
    W przypadku usunięcia danych Spółka informuje osobę o odbiorcach danych, na
    żądanie tej osoby.
    11.9. Ograniczenie przetwarzania. Spółka dokonuje ograniczenia przetwarzania danych
    na żądanie osoby, gdy:
    a) osoba kwestionuje prawidłowość danych – na okres pozwalający sprawdzić ich
    prawidłowość,
    b) przetwarzanie jest niezgodne z prawem, a osoba, której dane dotyczą, sprzeciwia
    się usunięciu danych osobowych, żądając w zamian ograniczenia ich
    wykorzystywania,
    c) Spółka nie potrzebuje już danych osobowych, ale są one potrzebne osobie, której
    dane dotyczą, do ustalenia, dochodzenia lub obrony roszczeń,
    d) osoba wniosła sprzeciw względem przetwarzania z przyczyn związanych z jej
    szczególną sytuacją – do czasu stwierdzenia, czy po stronie Spółki zachodzą
    prawnie uzasadnione podstawy nadrzędne wobec podstaw sprzeciwu.
    W trakcie ograniczenia przetwarzania Spółka przechowuje dane, natomiast nie
    przetwarza ich (nie wykorzystuje, nie przekazuje), bez zgody osoby, której dane
    dotyczą, chyba że w celu ustalenia, dochodzenia lub obrony roszczeń, lub w celu
    ochrony praw innej osoby fizycznej lub prawnej, lub z uwagi na ważne względy
    interesu publicznego.
    Spółka informuje osobę przed uchyleniem ograniczenia przetwarzania.
    W przypadku ograniczenia przetwarzania danych Spółka informuje osobę o
    odbiorcach danych, na żądanie tej osoby.
    11.10. Przenoszenie danych. Na żądanie osoby Spółka wydaje w ustrukturyzowanym,
    powszechnie używanym formacie nadającym się do odczytu maszynowego lub
    przekazuje innemu podmiotowi, jeśli jest to możliwe, dane dotyczące tej osoby, które
    dostarczyła ona Spółce, przetwarzane na podstawie zgody tej osoby lub w celu
    zawarcia lub wykonania umowy z nią zawartej, w systemach informatycznych Spółki.
    11.11. Sprzeciw w szczególnej sytuacji. Jeżeli osoba zgłosi umotywowany jej szczególną
    sytuacją sprzeciw względem przetwarzania jej danych, a dane przetwarzane są przez
    Spółkę w oparciu o uzasadniony interes Spółki lub o powierzone Spółce zadanie w
    interesie publicznym, Spółka uwzględni sprzeciw, o ile nie zachodzą po stronie Spółki
    ważne prawnie uzasadnione podstawy do przetwarzania, nadrzędne wobec interesów,
    praw i wolności osoby zgłaszającej sprzeciw, lub podstawy do ustalenia, dochodzenia
    lub obrony roszczeń.
    11.12. Sprzeciw przy badaniach naukowych, historycznych lub celach statystycznych.
    Jeżeli Spółka prowadzi badania naukowe, historyczne lub przetwarza dane w celach
    statystycznych, osoba może wnieść umotywowany jej szczególną sytuacją sprzeciw
    względem takiego przetwarzania. Spółka uwzględni taki sprzeciw, chyba że
    przetwarzanie jest niezbędne do wykonania zadania realizowanego w interesie
    publicznym.
    11.13. Sprzeciw względem marketingu bezpośredniego. Jeżeli osoba zgłosi sprzeciw
    względem przetwarzania jej danych przez Spółkę na potrzeby marketingu
    bezpośredniego (w tym ewentualnie profilowania), Spółka uwzględni sprzeciw i
    zaprzestanie takiego przetwarzania.
    11.14. Prawo do ludzkiej interwencji przy automatycznym przetwarzaniu. Jeżeli Spółka
    przetwarza dane w sposób automatyczny, w tym w szczególności profiluje osoby, i w
    konsekwencji podejmuje względem osoby decyzje wywołujące skutki prawne lub
    inaczej istotnie wpływające na osobę, Spółka zapewnia możliwość odwołania się do
    interwencji i decyzji człowieka po stronie Spółki, chyba że taka automatyczna decyzja
    (i) jest niezbędna do zawarcia lub wykonania umowy między odwołującą się osobą a
    Spółką; lub (ii) jest wprost dozwolona przepisami prawa; lub (iii) opiera się o wyraźną
    zgodę odwołującej osoby.
    12. MINIMALIZACJA
    Spółka dba o minimalizację przetwarzania danych pod kątem: (i) adekwatności danych do
    celów (ilości danych i zakresu przetwarzania), (ii) dostępu do danych, (iii) czasu
    przechowywania danych.
    12.1. Minimalizacja zakresu
    Spółka zweryfikowała zakres pozyskiwanych danych, zakres ich przetwarzania i ilość
    przetwarzanych danych pod kątem adekwatności do celów przetwarzania w ramach
    wdrożenia RODO.
    Spółka dokonuje okresowego przeglądu ilości przetwarzanych danych i zakresu ich
    przetwarzania nie rzadziej niż raz na rok.
    Spółka przeprowadza weryfikację zmian co do ilości i zakresu przetwarzania danych w
    ramach procedur zarządzania zmianą (privacy by design).
    12.2. Minimalizacja dostępu
    Spółka stosuje ograniczenia dostępu do danych osobowych: prawne (zobowiązania do
    poufności, zakresy upoważnień), fizyczne (strefy dostępu, zamykanie pomieszczeń) i logiczne
    (ograniczenia uprawnień do systemów przetwarzających dane osobowe i zasobów
    sieciowych, w których rezydują dane osobowe).
    Spółka stosuje kontrolę dostępu fizycznego.
    Spółka dokonuje aktualizacji uprawnień dostępowych przy zmianach w składzie personelu i zmianach ról osób, oraz zmianach podmiotów przetwarzających.
    Spółka dokonuje okresowego przeglądu ustanowionych użytkowników systemów i
    aktualizuje ich nie rzadziej niż raz na rok.
    Szczegółowe zasady kontroli dostępu fizycznego i logicznego zawarte są w procedurach
    bezpieczeństwa fizycznego i bezpieczeństwa informacji Spółki.
    12.3. Minimalizacja czasu
    Spółka wdraża mechanizmy kontroli cyklu życia danych osobowych w Spółce, w tym
    weryfikacji dalszej przydatności danych względem terminów i punktów kontrolnych
    wskazanych w Rejestrze.
    Dane, których zakres przydatności ulega ograniczeniu wraz z upływem czasu są usuwane z systemów produkcyjnych Spółki, jak też z akt podręcznych i głównych. Dane takie mogą być archiwizowane oraz znajdować się na kopiach zapasowych systemów i informacji
    przetwarzanych przez Spółkę. Procedury archiwizacji i korzystania z archiwów, tworzenia i
    wykorzystania kopii zapasowych uwzględniają wymagania kontroli nad cyklem życia danych, a w tym wymogi usuwania danych.
    13. BEZPIECZEŃSTWO
    Spółka zapewnia stopień bezpieczeństwa odpowiadający ryzyku naruszenia praw i wolności
    osób fizycznych wskutek przetwarzania danych osobowych przez Spółkę.
    13.1. Analizy ryzyka i adekwatności środków bezpieczeństwa
    Spółka przeprowadza i dokumentuje analizy adekwatności środków bezpieczeństwa danych
    osobowych. W tym celu:
    (1) Spółka zapewnia odpowiedni stan wiedzy o bezpieczeństwie informacji,
    cyberbezpieczeństwie i ciągłości działania − wewnętrznie lub ze wsparciem
    podmiotów wyspecjalizowanych.
    (2) Spółka kategoryzuje dane oraz czynności przetwarzania pod kątem ryzyka, które
    przedstawiają.
    (3) Spółka przeprowadza analizy ryzyka naruszenia praw lub wolności osób fizycznych
    dla czynności przetwarzania danych lub ich kategorii. Spółka analizuje możliwe
    sytuacje i scenariusze naruszenia ochrony danych osobowych uwzględniając
    charakter, zakres, kontekst i cele przetwarzania, ryzyko naruszenia praw lub wolności
    osób fizycznych o różnym prawdopodobieństwie wystąpienia i wadze zagrożenia.
    (4) Spółka ustala możliwe do zastosowania organizacyjne i techniczne środki
    bezpieczeństwa i ocenia koszt ich wdrażania. W tym Spółka ustala przydatność i
    stosuje takie środki i podejście jak:
    (i) pseudonimizacja,
    (ii) szyfrowanie danych osobowych,
    (iii) inne środki cyberbezpieczeństwa składające się na zdolność do ciągłego
    zapewnienia poufności, integralności, dostępności i odporności systemów i
    usług przetwarzania,
    (iv) środki zapewnienia ciągłości działania i zapobiegania skutkom katastrof, czyli
    zdolności do szybkiego przywrócenia dostępności danych osobowych i dostępu
    do nich w razie incydentu fizycznego lub technicznego.
    13.2. Oceny skutków dla ochrony danych
    Spółka dokonuje oceny skutków planowanych operacji przetwarzania dla ochrony danych
    osobowych tam, gdzie zgodnie z analizą ryzyka ryzyko naruszenia praw i wolności osób jest
    wysokie.
    Spółka stosuje metodykę oceny skutków przyjętą w Spółce.
    13.3. Środki bezpieczeństwa
    Spółka stosuje środki bezpieczeństwa ustalone w ramach analiz ryzyka i adekwatności
    środków bezpieczeństwa oraz ocen skutków dla ochrony danych.
    Środki bezpieczeństwa danych osobowych stanowią element środków bezpieczeństwa
    informacji i zapewnienia cyberbezpieczeństwa w Spółce i są bliżej opisane w procedurach
    przyjętych przez Spółkę dla tych obszarów.
    13.4. Zgłaszanie naruszeń
    Spółka stosuje procedury pozwalające na identyfikację, ocenę i zgłoszenie zidentyfikowanego
    naruszenia ochrony danych Urzędowi Ochrony Danych w terminie 72 godzin od ustalenia
    naruszenia.
    14. PRZETWARZAJĄCY
    Spółka posiada zasady doboru i weryfikacji przetwarzających dane na rzecz Spółki
    opracowane w celu zapewnienia, aby przetwarzający dawali wystarczające gwarancje
    wdrożenia odpowiednich środków organizacyjnych i technicznych dla zapewnienia
    bezpieczeństwa, realizacji praw jednostki i innych obowiązków ochrony danych
    spoczywających na Spółce.
    Spółka przyjęła minimalne wymagania co do umowy powierzenia przetwarzania danych.
    Spółka rozlicza przetwarzających z wykorzystania podprzetwarzających, jak też z innych
    wymagań wynikających z Zasad powierzenia danych osobowych.
    15. PROJEKTOWANIE PRYWATNOŚCI
    Spółka zarządza zmianą mającą wpływ na prywatność w taki sposób, aby umożliwić
    zapewnienie odpowiedniego bezpieczeństwa danych osobowych oraz minimalizacji ich
    przetwarzania.
    W tym celu zasady prowadzenia projektów i inwestycji przez Spółkę odwołują się do zasad
    bezpieczeństwa danych osobowych i minimalizacji, wymagając oceny wpływu na prywatność
    i ochronę danych, uwzględnienia i zaprojektowana bezpieczeństwa i minimalizacji
    przetwarzania danych od początku projektu lub inwestycji.`,
    src: "grupa1.jpg",
  },
];

export const teamItems: Array<Item> = [
  {
    name: "team",
    title: "FILIP SZAMBORSKI",
    description: `Sport zacząłem uprawiać w wieku 9 lat, kiedy to mama zaprowadziło mnie na judo i szermierkę. Jako nastolatek zająłem się parkourem i treningiem na siłowni. Od sześciu lat pracuję zawodowo jako trener personalny.
    Szczególny nacisk kładę na staranność i dokładność w wykonywaniu ćwiczeń, a także kompleksową mobilizację i rozciągnięcie po treningu. Moją specjalizacją jest modelowanie sylwetki, mogę pochwalić się licznymi spektakularnymi przemianami klientów.
    
    Po godzinach aktywnie podrózuję po Europie, zajmuję się modelingiem, kuchnią, a także zwierzętami - jestem wolontariuszem w schronisku dla psów.
    
    Prowadzone zajęcia:
    
    ○ fitness dla kobiet
    ○ power pump
    ○ modelowanie sylwetki dla mężczyzn
    ○ zdrowe plecy
    ○ treningi personalne`,
    src: "szamborski.jpg",
  },
  // {
  //   name: "team",
  //   title: "JAREK KRZOSEK",
  //   description: `Sporty kopane i uderzane uprawiam od 15 lat. Moje zajęcia mają opinie wymagających: nie oszczędzam ani siebie, ani podopiecznych. Uczestnicy treningów wychodzą z nich zmęczeni, ale zadowoleni. Oprócz przygotowania kondycyjnego bardzo duży nacisk kładę na technikę. Poszczególne ciosy czy akcje powtarzamy aż do momentu kiedy ćwiczący opanują je do perfekcji.
  //   Moim hobby są kuchnie świata (sport i karierę trenera łączę z pracą w gastronomii). Gram również w piłkę nożną i tenisa.

  //   𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:
  //   ○ boks
  //   ○ kickboxing
  //   ○ treningi indywidualne
  //   `,
  //   src: "2x.jpg",
  // },
  {
    name: "team",
    title: "KAROLINA UJEJSKA",
    description: `Specjalizuję się w treningu z Kettlebells wg metody Hardstyle. Jestem wicemistrzynią Polski Kettlebell Hardstyle oraz zwyciężczynią pucharu Polskiej Ligi Kettlebell Hardstyle w kategorii pro.
  Doświadczenia zawodnicze i wnioski wyniesione z wielu lat ciężkich treningów pozwalają efektywniej pomagać moim podopiecznym. Nacisk na technikę i dbałość o detale w połączeniu z wytrwałością, mogą wznieść każdego na niespotykany poziom siły -  która jest podstawą dla pozostałych cech motorycznych oraz pracy nad sylwetką.
  Po godzinach jestem fotografką, pasjonatką podróży i entuzjastką zdrowego stylu życia :)


    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ kettlebells / explosive strength`,
    src: "moz.jpg",
  },
  {
    name: "team",
    title: "MARCIN NASIADKO",
    description: `Kickboxing to moja pasja i życie od 15 lat. Trenowałem w Polsce oraz w najlepszych klubach Holandii, Łotwy i Norwegii. Dziewięciokrotnie zdobywałem Mistrzostwo Polski i Puchar Świata. Jako członek kadry narodowej pięciokrotnie reprezentowałem Polskę na Mistrzostwach Świata i Mistrzostwach Europy, walczyłem też w barwach największej zawodowej organizacji kickboxingu w Polsce – DSF Kickboxing Challenge.
    Od 4 lat trenuję dzieci, młodzież i dorosłych – zawodników oraz osoby ćwiczące rekreacyjnie. Dbam o każdy aspekt przygotowania technicznego, motorycznego i psychologicznego moich wychowanków.
     Po godzinach, oprócz sportów walki uprawiam narciarstwo. Bardzo lubię podróże.


    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:
    
    ○ kickboxing
    ○ boks
    ○ treningi personalne`,
    src: "nasiadko.jpg",
  },
  {
    name: "team",
    title: "MATEUSZ KRYNICKI",
    description: `Od dzieciństwa interesowałem się sportami walki. Na początku było to Oyama Karate, później odkryłem pasję do boksu tajskiego. Muai Thai ćwiczyłem w wielu klubach w Polsce i za granicą (Londyn, Kijów, Tajlandia) pod okiem wielu znamienitych osobistości. 
    Posiadam uprawnienia trenera nie tylko boksu tajskiego, ale również boksu klasycznego. 
    Ukończyłem również 9-miesięczne szkolenie dla służb mundurowych prowadzone przez byłych żołnierzy jednostki GROM.
    Po godzinach uprawiam survival i wspinaczkę wysokogórską. Interesuję się historią. Bardzo lubię teatr.
    
    
    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ muai thai
    ○ boks
    ○ kickboxing
    ○ samoobrona dla kobiet

    `,
    src: "krynicki.jpg",
  },
  {
    name: "team",
    title: "PATRYCJA CZEKAJ",
    description: `Według znajomych jestem wulkanem energii. Od ponad 20 lat ćwiczę taniec, miałam styczność z wieloma stylami - od inscenizacji tanecznych, przez jazz, po cheerleading, hip hop, new style, commercial i shuffle. Wielokrotnie uczestniczyłam w mistrzostwach na poziomie krajowym oraz europejskim, realizowałam pokazy taneczne na wydarzeniach sportowych i kulturalnych, koncerty, teledyski i eventy telewizyjne.
    Jestem absolwentką socjologii oraz kryminologii, a na codzień pracuję w branży Public Relations.
    Zdecydowanie unikam nudy, rzucam sobie wyzwania i próbuję nowych rzeczy, obecnie uczę się bachaty sensual. Interesuję się też modą. Każdą wolną chwilę poświęcam mojej największej miłości - maltance Sheri.


    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ shuffle dance
    ○ hip hop, new style
    ○ commercial
    ○ cheerleaders`,
    src: "czekaj.jpg",
  },
  {
    name: "team",
    title: "PIOTR BURZYKOWSKI",
    description: `Tłumacz, trener, terapeuta. Od najmłodszych lat podróżuję po świecie w poszukiwaniu wiedzy, doświadczeń i nowych smaków. Wierzę, że najszybszym sposobem na poprawę jakości życia każdego człowieka jest zwiększenie jego siły. Specjalizuję się w treningu według metody „Starting Strength”.
    Po godzinach zajmuję się urban exploration, filozofią, stolarstwem.
    
    
    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ trening siłowy ze sztangą (Starting Strength)
    ○ treningi personalne`,
    src: "piotr.jpg",
  },
  {
    name: "team",
    title: "SANDRA WOCH",
    description: `Moimi sportowymi pasjami są taniec towarzyski, siatkówka i siłownia. Specjalizuję się w kształtowaniu sylwetki oraz zajęciach dla kobiet w ciąży  i świeżo upieczonych mam. Mam doświadczenie w prowadzeniu zajęć dla kobiet w każdym wieku. 
    Treningi ze mną sprawią, że pokochasz i zaakceptujesz swoje ciało i będziesz sprawna i silna. 
     Kocham egzotyczne podróże i kuchnie świata. A w wolnym czasie pieszczoty ze swoim psem Cookim i dobrą książkę.
    Ciekawym doświadczeniem  był udział w konkursie Miss Warszawy, gdzie dotarłam do finału.
    
    
    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ brzuch, uda, pośladki
    ○ treningi personalne`,
    src: "woch.jpg",
  },
  {
    name: "team",
    title: "TOMEK RYTEL",
    description: `Jestem posiadaczem czarnego pasa w BJJ (brazylijskim jiu jitsu), członkiem kadry narodowej grapplingu, kilkukrotnym mistrzem polski ADCC, zdobywcą African Championship Masterclass 2021 w kategorii 65kg. Umiejętności przez wiele lat szlifowałem w Polsce, Abu Dhabi i Brazylii. Aktualnie pozostaję czynnym zawodnikiem i trenerem.
    Jestem człowiekiem rodzinnym. Moją drugą wielką pasją poza sportem jest sushi.

    
    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ BJJ dla dorosłych
    ○ BJJ dla dzieci
    ○ treningi personalne`,
    src: "rytel.jpg",
  },
  // {
  //   name: "team",
  //   title: "MOKEBE GŁUSZAK",
  //   description: `Biznesmen, człowiek sukcesu wykształcony na filmach Roberta Kiyosaki i Trader21.

  //   Po godzinach jestem człowiekiem czarnoskórym.

  //   𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

  //   ○ Boks grupa początkująca`,
  //   src: "2x.jpg",
  // },
];

export const aboutUsItems: Array<Item> = [
  {
    name: "about-us",
    title: "FITNESS, SZTUKI WALKI, TANIEC",
    description: `Mokotowski Gym to nowopowstały klub fitness przy ul. Białej Floty 2 (Marina Mokotów II) w Warszawie.


    Szukasz miejsca, w którym mógłbyś/mogłabyś nauczyć się tańczyć?
    Może kusi Cię boksowanie lub trening w parterze?
    Lubisz także trening siłowy?
    To wspaniale się składa: u nas znajdziesz wszystko - i to w jednym miejscu!


    Wyznajemy zasadę: przede wszystkim pasja.
    Nasi trenerzy są nie tylko świetnymi specjalistami we własnych dziedzinach, co także ciekawymi, otwartymi ludźmi, którzy bez trudu zarażą Cię pasją do sportu.


    Wejdź na wyższy poziom, i pamiętaj: sky is the limit!

    
    Oferujemy szeroki wybór zajęć w kameralnych grupach, treningi indywidualne i możliwość samodzielnych ćwiczeń - u nas każdy znajdzie coś dla siebie.`,
    src: "grupa1.jpg",
  },
  // {
  //   name: "about-us",
  //   title: "Taniec, sztuki walki i fitness",
  //   description: `Szukasz miejsca, w którym mógłbyś/mogłabyś nauczyć się tańczyć?
  //   Może kusi Cię boksowanie lub trening w parterze?
  //   Lubisz także trening siłowy?

  //   To się wspaniale składa. U nas znajdziesz wszystko - i to w jednym miejscu!
  //   `,
  //   src: "baner_01.jpg",
  // },
  // {
  //   name: "about-us",
  //   title: "Miejsce dla deweloperów",
  //   description: `Mokotowski Gym to projekt osób od lat związanych z branżą IT.

  //   Naszą ambicją jest stworzenie nie tylko doskonałego klubu sportowego, co również miejsca networkingu i integracji.
  //   Deweloperzy mogą wreszcie rozstrzygnąć kwestię wyższości C++ nad Javą poprzez przyjacielską wymianę argumentów na ringu`,
  //   src: "baner_02.jpg",
  // },
  // {
  //   name: "about-us",
  //   title: "Zadbaj o swoje zdrowie",
  //   description: `Człowiek nie został stworzony do pracy przy biurku - a jednak większość z nas tak właśnie spędza swój czas, przez co dręczą nas charakterystyczne dla tego typu życia udręki: ból pleców, zespół cieśni nadgarstka, ból karku, zwyrodnienia stawów - można by wymieniać bez końca!
  //   Naprawa złych nawyków może trwać latami, lecz tu z pomocą przychodzi trening siłowy - oswój się ze sztangą, przyspiesz swoje zdrowienie, zainwestuj we własne ciało.

  //   Pomóż swojej naturze. Nic tak nie wzmacnia jak trening siłowy. Zacznij już dziś, pod okiem naszych specjalistów, a wkrótce zapomnisz o bólu pleców!`,
  //   src: "baner_02.jpg",
  // },
  // {
  //   name: "about-us",
  //   title: "Wyselekcjonowana kadra pracownicza",
  //   description: `Szczególną uwagę zwracamy na czynnik ludzki.

  //   Gwarantujemy, że nasi trenerzy są nie tylko świetnymi specjalistami we własnych dziedzinach, co także ciekawymi, otwartymi ludźmi, którzy bez trudu zarażą Cię pasją do sportu.
  //   Nic nie przyspiesza rozwoju tak mocno, co dobry nauczyciel. Nasi trenerzy przeprowadzą Cię przez podstawy aż po poziom mistrzowski.
  //   Pamiętaj - sky is the limit.`,
  //   src: "baner_03.jpg",
  // },
];

export const offerItems: Array<Item> = [
  {
    name: "offer",
    title: "Starting Strength™",
    description: `Czym jest Starting Strength™?
    
    
    Starting Strength™  jest kompletną metodą treningu siłowego opracowaną przez trenera Marka Rippetoe.
    Trening według metody Starting Strength™ świetnie się sprawdza zarówno u nastolatków i dorosłych, którzy pragną zwiększyć swoją sprawność fizyczną i poprawić sylwetkę, jak i u seniorów, którzy pragną zachować jak najdłużej autonomię w życiu codziennym. Metoda opiera się na ćwiczeniach wielostawowych wykonywanych ze sztangą według starannie zaprojektowanego programu treningowego.


    Główne ćwiczenia to:
○ przysiad ze sztangą
○ wyciskanie sztangi stojąc
○ wyciskanie sztangi leżąc
○ martwy ciąg


Zostały one wybrane, ponieważ pozwalają na zwiększenie siły u trenujących szybciej, skuteczniej i w bardziej bezpieczny sposób w porównaniu z innymi zestawami ćwiczeń. Będziesz stawał się silniejszy od samego początku programu, ponieważ na każdym treningu będziemy odpowiednio zwiększać ciężar na sztandze.
Ale bez obaw! Początkowe ciężary i progresja będą zawsze dostosowane do Twojej kondycji i poziomu siły.
W miarę postępów w programie pojawią się nowe ćwiczenia, ale i tak  przysiady, wyciskanie stojąc i leżąc oraz martwe ciągi pozostaną najczęściej wykonywanymi ćwiczeniami.


Zajęcia Starting Strength™ prowadzi u nas trener 𝐏𝐢𝐨𝐭𝐫 𝐁𝐮𝐫𝐳𝐲𝐤𝐨𝐰𝐬𝐤𝐢`,
    src: "strength.jpg",
  },
  {
    name: "offer",
    title: "Cross Training",
    description: `Cross Training to program treningu siłowego i kondycyjnego rodem z CrossFitu. Jest to świetna alternatywa dla monotonnych i nudnych treningów na siłowni - treningi crossa nigdy nie są takie same. 
    
    
    Głównym założeniem tego treningu jest osiągnięcie sprawności aż w dziesięciu różnych obszarach fizycznych: wydolność krążeniowo-oddechowa, wytrzymałość, siła, gibkość, moc, szybkość, zwinność, równowaga, koordynacja i dokładność. 
    Na zajęciach przeplatają się ćwiczenia funkcjonalne, elementy lekkoatletyki, gimnastyki i treningu siłowego – uczestnicy biegają, wiosłują, skaczą, przenoszą najróżniejsze przedmioty, rywalizują z innymi oraz z samym sobą. 
    
    
    Metodyka Cross Training przynosi rozmaite rezultaty: większą wytrzymałość mięśni, zwiększenie zakres ruchu niemal wszystkich stawów, podkręcenie metabolizmu, przyspieszenie spalanie tkanki tłuszczowej, lepszą sprawność fizyczną organizmu, a także równomierne kształtowanie całej sylwetki.
    

    Zajęcia Cross Training prowadzone są przez trenera 𝐅𝐢𝐥𝐢𝐩𝐚 𝐒𝐳𝐚𝐦𝐛𝐨𝐫𝐬𝐤𝐢𝐞𝐠𝐨`,
    src: "cross2.jpg",
  },
  // {
  //   name: "offer",
  //   title: "Mama wraca do formy",
  //   description: `Ciąża to niezwykle wymagający czas dla kobiety, a aktywność fizyczna to najlepsze remedium na powrót do dawnej formy.

  //   Nie pozwól sobie wmówić, że ruch nie jest dla Ciebie! Na naszych zajęciach poznasz podstawowe formy ruchowe, abyś mogła stopniowo i sukcesywnie wzmocnić swój organizm.`,
  //   src: "mamy.jpg",
  // },
  {
    name: "offer",
    title: "Zdrowe plecy",
    description: `Znowu obolały wstajesz sprzed komputera? Czujesz, że Twoim plecom przydałby się odpoczynek? W takim razie oto zajęcia dla Ciebie.


    Ból całych pleców lub któregoś z odcinków kręgosłupa nie należy do rzadkości, a ze względu na sposób życia i pracy dla wielu osób stał się przykrą codziennością.
    Gdy zastanawiamy się, co w takiej sytuacji zrobić, często pędzimy do marketu, by specjalną kupić poduszkę ortopedycznej na kręgosłup szyjny czy twardy materac. Po czasie okazuje się jednak, że to tylko częściowo rozwiązało problem i wprawdzie boli mniej, ale nie jest idealnie. 
    Musimy sobie bowiem uświadomić, że nasz kręgosłup nie działa w osamotnieniu i sam nie „dźwiga” całego obciążenia. Nieocenionym wsparciem są mięśnie korpusu i to one powinny pełnić rolę mitologicznego Atlasa - jeśli więc nie zadbamy o to, by nasze mięśnie były wystarczająco silne, ciężar będzie osadzony na samym kręgosłupie, a ten odpowie nam bólem i kształtującymi się zwyrodnieniami. 
    Jeśli zaś wystarczająco się nie rozciągniemy, napięte ścięgna i zbite mięśnie do pewnego stopnia będą mogły ograniczyć naszą ruchomość i również wywoływać ból (może być to efektem za małej ilości ruchu lub po prostu stresu). 
    

    Dlaczego warto wykonywać ćwiczenia na zdrowy kręgosłup? 
    Ból całych pleców lub któregoś z odcinków kręgosłupa nie należy do rzadkości, a ze względu na sposób życia i pracy dla wielu osób stał się przykrą codziennością. Gdy zastanawiamy się, co w takiej sytuacji zrobić, często pędzimy do marketu, by specjalną kupić poduszkę ortopedycznej na kręgosłup szyjny czy twardy materac. 
    Po czasie okazuje się jednak, że to tylko częściowo rozwiązało problem i wprawdzie boli mniej, ale nie jest idealnie. Musimy sobie bowiem uświadomić, że nasz kręgosłup nie działa w osamotnieniu i sam nie „dźwiga” całego obciążenia. Nieocenionym wsparciem są mięśnie korpusu i to one powinny pełnić rolę mitologicznego Atlasa. Jeśli więc nie zadbamy o to, by nasze mięśnie były wystarczająco silne, ciężar będzie osadzony na samym kręgosłupie, a ten odpowie nam bólem i kształtującymi się zwyrodnieniami. Jeśli zaś wystarczająco się nie rozciągniemy, napięte ścięgna i zbite mięśnie do pewnego stopnia będą mogły ograniczyć naszą ruchomość i również wywoływać ból (może być to efektem za małej ilości ruchu lub po prostu stresu). 
    
    
    Kto powinien wykonywać ćwiczenia na zdrowy kręgosłup? 
    Wciąż można spotkać się z przeświadczeniem, że ćwiczenia na zdrowy kręgosłup to zajęcia tylko dla seniorów, a to przecież zupełnie nieprawda! Siedzący tryb życia, ciągłe garbienie się i zamknięta pozycja przed komputerem – to codzienność ogromnej liczby Polaków - i to bez względu na wiek. 
    Warto zdawać sobie sprawę, że nawet jeśli jeszcze nie boli nas odcinek lędźwiowy czy piersiowy kręgosłupa, to w pewnym momencie zacznie, a właśnie uprzednia troska o mięśnie pleców może znacząco oddalić ten moment w czasie. Troska o zdrowy kręgosłup wymaga regularnej pracy – na szczęście nie jest to bardzo uciążliwe zajęcie, dzięki czemu nawet codzienna praktyka nie powinna przysporzyć nam problemu. 
    
    
    Podczas wykonywania ćwiczeń na kręgosłup musimy zadbać o wzmocnienie mięśni, które podtrzymują nasz układ kostny, ponieważ to one odciążają plecy i pozwalają zredukować negatywnie efekty spędzania całych dni w pozycji siedzącej. Przede wszystkim należy pamiętać, że ćwiczenia na zdrowy kręgosłup nie powinny należeć do dynamicznych i przy ich wykonywaniu zdecydowanie bardziej liczy się dokładność i reakcja na własne odczucia, niż tempo (podobnie jak w jodze). Każde z ćwiczeń, zarówno na kręgosłup szyjny, piersiowy czy lędźwiowy wymaga wykonania kilku powtórzeń i zachowania symetrii (tzn. jeśli robimy skręt w lewo, to musimy wykonać też skręt w prawo – daje to pewność równomiernego rozciągnięcia i rozbudowania mięśni i ścięgien).
    
    
    Zajęcia prowadzi trener 𝐅𝐢𝐥𝐢𝐩 𝐒𝐳𝐚𝐦𝐛𝐨𝐫𝐬𝐤𝐢`,
    src: "plecy.jpg",
  },
  {
    name: "offer",
    title: "Boks",
    description: `Współczesny boks jest dyscypliną wywodzącą się z XVIII-wiecznej Anglii.
    Jako sport walki jest unikatem na skalę światową, ponieważ ciosy zadaje się tylko rękami. Bywa nazywany sportem dżentelmenów.

    
    Na grupie początkującej kształtujemy przede wszystkim odpowiednie nawyki i pamięć mięsniowo-motoryczną.
    Typowe zajęcia składają się z 15 minut rozgrzewki, a nastepnie z zajęć w parach, w których ćwiczymy wyprowadzanie ciosów, poruszanie się oraz obronę.
    Oprócz techniki kładziemy nacisk na przygotowanie kondycyjne. W miarę zdobywania doświadczenia wprowadzamy sparingi.

    
    Zajęcia są dla każdego, kto pragnie ukształtować kondycję i sylwetkę, zyskać praktyczne umiejętności obronne oraz pewność siebie.
    Prowadzimy grupy koedukacyjne oraz dedykowane dla kobiet.
    Zapraszamy również młodzież - tutaj minimalny wiek to ok. 12 lat.
    

    Zajęcia prowadzą 𝐉𝐚𝐫𝐞𝐤 𝐊𝐫𝐳𝐨𝐬𝐞𝐤 oraz 𝐌𝐚𝐫𝐜𝐢𝐧 𝐍𝐚𝐬𝐢𝐚𝐝𝐤𝐨.`,
    src: "boks.jpg",
  },
  {
    name: "offer",
    title: "Shuffle Dance",
    description: `Shuffle dance to obecnie jeden z najbardziej popularnych stylów tańca w Europie, polegający na pozornym „ślizganiu się” po podłodze. Oprócz ślizgania, styl przeplata się różnorodnymi krokami, takimi jak przeskoki, obroty, wykopy, moonwalk i różnego rodzaju footworkami - a to wszystko w rytm energicznej muzyki!

    
    Do czego tańczymy?
    Styl wywodzi się z klubów tanecznych muzyki rave, które w brzmieniu przypomina techno i house, ale ma mocniejsze brzmienie i szybsze tempo - z pewnością nie zabraknie sporej dawki muzycznej energii. 
    Regularne zajęcia Shuffle Dance poprawiają kondycję fizyczną, umożliwiają zrzucenie nadprogramowych kilogramów i spalenie duuużych ilości kalorii - to przyjemna wersja treningu cardio! Dodatkowo zajęcia pozwolą na polepszenie koordynacji ciała, ale przede wszystkim to dobra zabawa, duża dawka pozytywnej energii i skok endorfin.
    Zapisz się już dziś i tańcz jak w teledysku LMFAO!
    

    Zajęcia prowadzi trener 𝐏𝐚𝐭𝐫𝐲𝐜𝐣𝐚 𝐂𝐳𝐞𝐤𝐚𝐣.
    `,
    src: "shuffle.jpg",
  },
  {
    name: "offer",
    title: "Kickboxing",
    description: `Kickboxing należy do grupy stójkowych sportów walki. Dozwolone są w nim ciosy bokserskie i kopnięcia. 
    Zasady dyscypliny nastawiają nas na ciągłą wymianę ciosów i kopnięć, a brak przestojów walce powoduje, że jest to sport niezwykle dynamiczny oraz spektakularny dla oka. 
    
    
    Treningi kickboxingu rozwiją nasze ciało w sposób holistyczny. Kształtuje takie cechy motoryczne jak szybkość, siła, wytrzymałość. Sport ten nie tylko wpływa dobrze na kondycje fizyczną, ale i psychiczną, redukuje stres, uczy trzymać nerwy na wodzy oraz znacząco poprawia naszą samodyscyplinę i pewność siebie.
    

    Zajęcia z kickboxingu w naszym klubie prowadzi 𝐌𝐚𝐫𝐜𝐢𝐧 𝐍𝐚𝐬𝐢𝐚𝐝𝐤𝐨.
    `,
    src: "kickboxing.jpg",
  },
  {
    name: "offer",
    title: "BJJ",
    description: `Brazylijskie jiu-jistu jest to dyscyplina sportowa wywodząca się z judo, ju-jitsu oraz zapasów, która koncentruje się na walce w parterze.
    Techniki ukierunkowane są na zajęcie pozycji dominujących oraz ataki dźwigniami bądź duszeniami. Nie stosuje się uderzeń ani kopnięć. 
    

    Jest to sport zarówno dla mężczyzn jak i dla kobiet. Rozwija szeroko rozumianą koordynację ruchową, siłę oraz wytrzymałość.


    Zajęcia prowadzi trener 𝐓𝐨𝐦𝐚𝐬𝐳 𝐑𝐲𝐭𝐞𝐥.
    `,
    src: "bjj.jpg",
  },
  {
    name: "offer",
    title: "Kettlebell hardstyle",
    description: `Trening z odważnikami kulowymi metodyką Hardstyle przynosi nad wyraz wiele korzyści.
     Holistycznie wzmacnia ciało i jest niezwykle wydajny. Podczas treningu z kettlami angażujemy do pracy wiele mięśni jednocześnie, a więc zwiększa się zapotrzebowanie na energię.
Trening kettlami doskonale buduje siłę, a jak wiadomo siła jest podstawą dla wszystkich cech motorycznych i jest potrzebna każdemu. Zwiększa wytrzymałość, koordynację, wzmacnia mięśnie odpowiedzialne za prawidłową postawę ciała oraz mięśnie głębokie, które pełnią rolę ochronną dla narządów wewnętrznych. 
    

    Podstawowe techniki z kettlem wg metody Hardstyle opierają się na głównych wzorcach ruchowych, których trenowanie przekłada się na to, że coraz lepiej wykonujemy inne ruchy, zarówno w życiu codziennym jak i w różnych sportach i aktywnościach.
    W treningu z kettlami wykonujemy ruchy o charakterze siłowym, dynamicznym i eksplozywnym, a więc kształtujemy wszystkie cechy motoryczne używając tylko jednego przyrządu treningowego.
    A przede wszystkim: trening typu kettlebell pomaga niwelować stres i jest po prostu fajny!
    

    Zajęcia z kettlebells prowadzi 𝐊𝐚𝐫𝐨𝐥𝐢𝐧𝐚 𝐔𝐣𝐞𝐣𝐬𝐤𝐚.
    `,
    src: "kettlebell.jpg",
  },
  {
    name: "offer",
    title: "Oddech & koordynacja",
    description: ` Zajecia poswiecone aktywizacji obu półkul mózgowych majace na celu zgłębienia świadomosci własnego ciała. Bardzo wiele osób trenując na siłowni, bądź też trenując inne sporty ma problemy także z prawidłowym oddychaniem. 
    Trenują na tak zwanym bezdechu, przez co nie moga podniesć pewnej poprzeczki z racji niedotlenienia organizmu. 
    

    Zajecia będą poświęcone poprawie wlaśnie tych elementów ruchowych i oddechowych.
    `,
    src: "koncentracja.jpg",
  },
  {
    name: "offer",
    title: "Boks/kickboxing kids&parents",
    description: `Pomysł na te zajęcia zrodził się przypadkiem.
    Otóż często zdarzało się, że tatusiowie na treningi z przychodzili z pociechami. Postanowiliśmy więc wyjść naprzeciw potrzebom i raz w tygodniu wprowadzić zajęcia, na których komfortowo ćwiczyć mogą dwa pokolenia. 
    
    Na sali jest dwóch trenerów, jeden opiekuje się dorosłymi, drugi dziećmi. 
    Minimalny rekomendowany wiek rozpoczęcia zajeć to około 9 lat, choć to oczywiście bardzo indywidualna sprawa. 
    W razie wątpliwości zapraszamy do kontaktu z recepcją.
    `,
    src: "kids.jpg",
  },
  // {
  //   name: "offer",
  //   title: "MUAY THAI",
  //   description: `Przyjmuje się, że muay thai wywodzi się z Tajlandii, jednakże brak jest historycznych źródeł potwierdzających jednoznacznie i ostatecznie to założenie. Pomimo tego, iż większość krajów z tamtego regionu przypisuje sobie wynalezienie tej sztuki walki, to nie ulega wątpliwości, że to właśnie w Tajlandii rozwinął on się najbardziej stając się bez mała sportem narodowym. Początek rozwoju starożytnego muay thai (tzw. muay boran), jako wyodrębnionego i posiadającego cechy charakterystyczne stylu walki wręcz, datuje się według źródeł archeologicznych na początek XIII wieku (era Sukhothai). Czterej wojownicy Jatubaht, którzy ochraniali królewskiego słonia po stracie broni musieli używać Muay thai. U swoich źródeł był silnie zrytualizowanym i przesyconym elementami religijnymi, stylem obejmującym taniec przed walką (waikhru) oraz rytualne metody treningowe. W miarę szerszej jego adaptacji na potrzeby tajlandzkiej armii, włączono do niego elementy walki bronią (krabi-krabong) oraz za pomocą owijaczy na ręce zwanych "kaad chuek", które w celu zadawania większych obrażeń były specjalnie utwardzane i nabijane kamiennym żwirem (wg niektórych źródeł także szkłem i innymi podobnymi materiałami). Na rozwój muay boran wpłynęło też silnie chińskie Wushu, z którym Tajowie zetknęli się w na początku drugiej połowy XVIII wieku, a z którego zaczerpnięto rozmaite techniki uderzeń zadawanych z wyskoku.
  //   W roku 1887 na mocy dekretu królewskiego otwarto wydziały wychowania fizycznego na nowych akademiach wojskowych zachodniego typu i w kolegiach nauczycielskich. Wśród obowiązkowych zajęć był boks tajski, praktykowany dwa razy w tygodniu przez półtorej godziny. Większość młodych bokserów jednakże pochodziła z klasy pracującej i trenowała w swoich wioskach i pobliskich świątyniach. Instruktorzy, zarówno z wiosek, jak i ze świątyń, byli z reguły bokserami, którzy zakończyli karierę sportową. Przed głównymi imprezami obiecujący zawodnicy trenowali codziennie, a w celu zachęcenia ich otrzymywali stypendia treningowe od lokalnych przedstawicieli rządu i możnowładców.
  //   Do końca XIX wieku wykształciły się w miarę jednolite ringowe reguły muay thai przy użyciu owijaczy (w formule zwanej "muay kaad chuek" ). W 1921 walki w boksie tajskim zaczęły odbywać się na wzniesionych platformach otoczonych linami. Powód był taki, że platforma i liny zapobiegały przed wdarciem się kibiców na ring. A w roku 1929 właściciel stadionu Suan Sanuk wprowadził ring dla tajskich bokserów z trzema linami i narożnikami, głównie dlatego, że miał nadzieję na organizowanie międzynarodowych walk bokserskich.
  //   Ze względu na wysoką urazowość walk, od połowy lat 20. XX wieku zaczęto wycofywać z ringu owijacze "kaad chuek" oraz wyłączać stosowanie bardziej destrukcyjnych technik, takich jak kopnięcia w krocze, dźwignie, rzuty czy uderzenia głową. Najprawdopodobniej bezpośrednią przyczyną tych zmian była śmierć zawodnika na ringu stadionu Lak Muang w Bangkoku. Na początku lat 30. XX wieku zawodnicy boksu tajskiego zaczęli używać metalowych ochraniaczy na krocze i skórzanych rękawic bokserskich. Stosowanie rękawic bokserskich stało się przy okazji przyczyną rozbudowania technik muay thai o elementy zachodnioeuropejskiego boksu. Przyjęto zmodyfikowane przepisy bokserskie markiza Queensberry i w ślad za tym profesjonalne walki Tajów wyznaczono na 5 rund po 3 minuty każda. Stopniowo wprowadzono podział zawodników na kategorie wagowe. Wszystko to uczyniło z muay thai popularny na całym świecie sport walki. Młodzi bokserzy wykonujący rytuał przed walką
  //   Niemniej jednak, wiele z tradycji przetrwało. Na przykład, zawodnicy nadal wykonywali tradycyjny taniec przed walką (waikhru), początkowo, by przedstawić region, z którego pochodzą, a dziś ze względu na zwyczaje. Wykonywali swoje modły do bogów i odmawiali walki, jeżeli nie towarzyszyły im synkopowane rytmy tajskiej muzyki ludowej. Zespół muzyczny składał się z samych mężczyzn (aby uniknąć osłabienia sił zawodników): flecisty, dwóch bębnistów i cymbalisty. Flecista kierował perkusistami i zmieniał swe tony w zależności od tempa walki i emocji przejawianych przez tłum.
  //   Około roku 1935 ośrodki, w których rozgrywano walki, zaczęły przeznaczać część zysków na pomoc tajlandzkim instytucjom dobroczynnym i armii Tajlandii. Taka praktyka stosowana jest do czasów obecnych.

  //   Zajecia rozpoczynaja sie od mocniej rozgrzewki, ktora aktywuje kazdy and element naszego ciała aby obyło sie Bez specjalnych kontuzji.
  //   Nastepnie pracujemy nad technika w parach zazwyczaj po 3 min jak na normalnej walce, pomiedzy rundami wplatamy cwiczenia ogolnorozwojowe.
  //   Dla chetnych kazdy trening konczymy kilkoma rundami sparingowymi Albo cardio na worku.
  //   Podczas treningu ksztaltujemy cala sylwetke, charakter i refleks. `,
  //   src: "muaythai.jpg",
  // },
];

export const priceListItems: Array<Item> = [
  {
    name: "pricelist",
    title: "Oferta skrojona dla Ciebie",
    description: `Oferujemy kilka rodzajów karnetów, zarówno z możliwością korzystania z zajęć grupowych, jak i bez.

    
    Zakup karnetów i rezerwacje zajęć odbywają się przez stronę www (𝐝𝐨 𝐤𝐥𝐢𝐤𝐧𝐢𝐞̨𝐜𝐢𝐚 𝐩𝐨𝐧𝐢𝐳̇𝐞𝐣), można też kupić je na recepcji klubu. 
    Na zajęciach grupowych obowiązuje limit osób, co gwarantuje komfort ćwiczeń i bezpośredni kontakt z prowadzącym.

    Treningi indywidualne są płatne bezpośrednio u prowadzących – na pierwszy trening można umówić się za pośrednictwem recepcji (+48 696 168 867).`,
    src: "pricelist.jpg",
  },
];

export const scheduleItems: Array<Item> = [
  {
    name: "schedule",
    title: "Sana nr1",
    description: `Sala numer jeden to serce naszego klubu. 
    To właśnie tutaj będą odbywać się zajęcia z szeroko zakrojonych sztuk walki.
    Poznasz u nas tajniki BJJ, muay thai, kickboxingu, a także boksu.`,
    src: "grafik1.jpg",
  },
  {
    name: "schedule",
    title: "Sala nr2",
    description: `W drugiej sali znajdziecie państwo wysokiej klasy sprzęt siłowy, który będziecie mogli wykorzystac do budowaniu własnego ciała.
    
    Na sali odbywają się też zajęcia taneczne.`,
    src: "grafik2.jpg",
  },
];
