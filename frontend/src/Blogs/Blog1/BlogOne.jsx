import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import imgOne from "../Blog1/imgOne.png";
import coins from "../Blog1/coins.png";

export function BlogOne() {
  return (
    <div className="mx-auto justify-center max-w-screen-md pt-12 flex pb-12">
      <Card className="mt-6 w-auto">
        <CardHeader color="blue-gray" className="relative">
          <img src={imgOne} alt="Crypto" />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Crypto currency Sinhala
          </Typography>
          <Typography variant="paragraph">
            හරි, අපි මේකෙදි කතා කරන්න යන්නේ මෑත වසරවල දී සැලකිය යුතු අවධානයක් සහ
            ජනප්‍රියත්වයක් ලබා ඇති ඩිජිටල් මුදල් එකෙක් වෙන cryptocurrency ගැන
            🪙. මෙම බ්ලොග් එක මගෙන් ඔයාලට දැනගන්න පුළුවන් cryptocurrency වල
            ඉතිහාසය, මේ වන විට අපිට ඒකෙන් ලබාගන්න පුළුවන් ප්‍රතිලාභ, ඒකෙදි
            භාවිතා වෙන තාක්ෂණය, ඒ වගේම ක්‍රිප්ටො කරන්සි බාවිතයේදී තියෙන අවදානම
            සහ cryptocurrency වල අනාගතය පිළිබඳව වගේ කරුණු රැසක්. <br />
            <br /> අපි මුලින්ම අවධානය යොමු cryptocurrency වල අතීතය පිළිබඳ.
            ඇත්තටම මේකට දිගු කාලයක් තිස්සේ අඩිතාලම වැටුනද cryptocurrency හි
            ඉතිහාසය 2009 සිට සොයාගත හැක. පළමු ඩිජිටල් මුදල් ඒකකය වන්නේ
            බිට්කොයින් ( Bitcoin ). Satoshi Nakamoto යන අනවර්ථ නාමය භාවිත කරමින්
            නිර්නාමික පුද්ගලයකු හෝ කණ්ඩායමක් විසින් මෙම මුදල් ඒකකය ප්‍රථම වරට
            නිර්මාණය කරන ලදී. ඇත්තටම කිව්වොත් ඒක හැදුවේ කවුද කියන එක තාමත්
            අභිරහසක්. එයාලා කවුරු වුනත් බැංකු හෝ රජය වැනි මධ්‍යගත අධිකාරින් මත
            රදා නොපවතින විමධ්‍යගත සහ ආරක්ෂිත ගෙවීම් පද්ධතියක් නිර්මාණය කිරීමේ
            අරමුණින් තමා ඔයාට මේක හදලා තියෙන්නේ. ඇත්තටම මේක සාම්ප්‍රදායික මුදල්
            වර්ග සඳහා විකල්ප මුදල් වර්ගයක් විදිහට නම් කරන්න පුළුවන්. බිට්කොයින්
            වලින් ඇරඹුමක් ගත්ත, ඩිජිටල් මුදල් ඒකක අද වන කොට රාශියක් තිබේ ඒ
            අතරින් ප්‍රධාන වශයෙන්ම මුල් පහ නම්,
            <br/>
            <br/>
            <div className="flex justify-around items-center">
              <div>
                <li>Bitcoin</li>
                <li>Ethereum</li>
                <li>Ripple</li>
                <li>Litecoin</li>
                <li>Tether</li>
              </div>
              <div className="w-1/2">
                <img
                  src={coins}
                  alt="btc"
                />
              </div>
            </div>
            <br/>
            <br/>
            <Typography variant="paragraph">
            මේවා තමා අද වෙනකොට මුල් අතරේ තියෙන ඩිජිටල් මුදල් එකක 5. ඒ හැම එකකටම තමන්ගෙ සුවිශේෂී ලක්ෂණ සහ භාවිත වස්තා තියෙනවා. මම මේ බ්ලොග් සටහනේ විශේෂයම කතා කරන්නන් නේ බිට්කොයින් පිළිබඳව.
            <br/>
            <br/>
            හරි අපි ඊළඟට බලන්න යන්නේ cryptocurrency පිටුපස තියෙන තාක්ෂණය පිළිබඳ. අපි ඒ තාක්ෂණයට කියන්නේ Blockchain technology කියලා. ඇත්තටම මොකක්ද මේ Blockchain කියලා කියන්නේ! ඇත්තටම  Blockchain කියන්නේ මේ ලෝකේ ඉන්න පරිගණක පරිශීලකයන්ට දස දහස් ගණනක එකතුවකි. හරි අපි බලමු ඒක ඔයාලට තේරෙන විදිහට කියන්න කොටස් කිහිපයකින්.
            </Typography>
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">like</CardFooter>
      </Card>
    </div>
  );
}
