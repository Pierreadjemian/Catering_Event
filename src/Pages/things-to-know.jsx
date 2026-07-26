import "../Styles/Thingstoknow.css";

const Policy = ({ Num, title, body }) => {
  return (
    <div className="policy-card">
      <div className="policy-card">{Num}</div>
      <div className="policy-copy">
      <div className="policy-title">{title}</div>
      <div className="policy-body">{body}</div>
      </div>
    </div>
  );
};

const ThinsgToKnow = () => {
  return (
    <div>
      <Policy Num="1" title="Booking window" body="Catering orders require at least 5 business days' notice; events over 50 guests need 14 days." />
      <Policy Num="2" title="Deposit" body="A 30% non-refundable deposit secures the date; the balance is due 48 hours before the event." />
      <Policy Num="3" title="Final headcount" body="Guest counts must be confirmed 72 hours in advance; we prepare for that number and can't guarantee adjustments after." />
      <Policy Num="4" title="Cancellations" body="Cancel 7+ days out for a full refund minus the deposit. Within 7 days, 50% of the total is retained. Within 48 hours, no refund." />
      <Policy Num="5" title="Menu changes" body="Menu substitutions are free up to 5 days before the event; after that, changes are accommodated only if ingredients allow." />
      <Policy Num="6" title="Allergies and dietary needs" body="All allergies and dietary restrictions must be disclosed at booking; we label dishes but can't guarantee a completely allergen-free kitchen." />
      <Policy Num="7" title="Delivery and setup" body="Delivery includes drop-off and basic setup within a 15-mile radius; anything farther incurs a mileage fee, and full-service staffing is quoted separately." />
      <Policy Num="8" title="Equipment and rentals" body="Chafing dishes, serving ware, and linens are on loan and must be returned within 24 hours or the replacement cost is charged." />
      <Policy Num="9" title="Weather and outdoor events" body="For outdoor events, the client is responsible for providing shelter for food and staff; we reserve the right to adjust service if conditions become unsafe." />
      <Policy Num="10" title="Leftovers and food safety" body="Perishable leftovers are packed at the client's request but must be refrigerated within 2 hours; we're not liable for food safety once it leaves our staff's care." />
    </div>
  );
};

export default ThinsgToKnow;