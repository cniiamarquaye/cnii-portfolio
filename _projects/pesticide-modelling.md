---
layout: project
title: Reactive Transport Modelling of Pesticide Fate in Variably Saturated Soil
summary: Coupled kinetic–hydraulic simulation of pesticide degradation and transport used to evaluate groundwater contamination risk under infiltration-driven conditions.
hero: /assets/images/comsol/comsol001_005c.gif
thumbnail: /assets/images/comsol/comsol001_007c.gif
tech:
  - COMSOL Multiphysics
  - Reactive Transport Modelling
  - Richards Equation
  - Advection–Dispersion–Reaction
  - Contaminant Hydrogeology
  - Groundwater Risk Assessment
---

<section class="space-y-12">

<p class="text-lg text-slate-600 dark:text-slate-400">
Reactive Transport Modelling • Contaminant Hydrogeology • Groundwater Risk Assessment
</p>

<!-- ====================================================== -->
<!-- Problem Framing -->
<!-- ====================================================== -->

<div class="grid md:grid-cols-3 gap-10 items-start">

<div class="md:col-span-2 space-y-6">

<h2 class="text-xl font-semibold">Problem Framing</h2>

<p>
Surface-applied pesticides initiate a coupled hydraulic and chemical response
within the subsurface. As infiltration occurs, dissolved contaminants migrate
through soil while simultaneously undergoing degradation reactions that
transform the parent compound into secondary species.
</p>

<p>
These transformation pathways are environmentally important because
degradation does not always reduce groundwater risk. Intermediate
products may be both <strong>mobile and toxic</strong>, allowing contamination
to propagate beyond the zone expected from the parent compound alone.
</p>

<p>
This project developed a reactive transport modelling framework in
<strong>COMSOL Multiphysics</strong> to evaluate how coupled chemical reactions
and unsaturated flow processes influence the spatial and temporal evolution
of pesticide contamination beneath an infiltration source.
</p>

</div>

<div class="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">

<h3 class="font-semibold text-lg">Project Quick Facts</h3>

<ul class="mt-4 space-y-3 text-sm">

<li><strong>Model Platform</strong><br>COMSOL Multiphysics 6.2</li>

<li><strong>Model Type</strong><br>Reactive Simulation</li>

<li><strong>Domain</strong><br>Axisymmetric Soil Column</li>

<li><strong>Simulation</strong><br>10 Days</li>

<li><strong>Species Simulated</strong><br>Parent + 2 Degradation Products</li>

<li><strong>Physical Processes</strong><br>Unsaturated Flow, Solute Transport, Chemical Reactions</li>

<li><strong>Application</strong><br>Pesticide Fate and Groundwater Risk</li>

</ul>

</div>

</div>

<!-- ====================================================== -->
<!-- Plume Evolution Overview -->
<!-- ====================================================== -->

<div class="space-y-2">

<h2 class="text-xl font-semibold">Reactive Plume Evolution</h2>

<img src="{{ '/assets/images/comsol/comsol001_007c.gif' | relative_url }}"
class="rounded-xl w-full max-w-md mx-auto">

<p class="text-sm text-slate-500 text-center">
<strong>Figure 1.</strong> Time-evolving contaminant plume produced by the reactive transport simulation.
The animation shows infiltration-driven migration of pesticide compounds through
variably saturated soil while chemical reactions transform the parent compound
into secondary products. Although concentrations decline near the surface due to
degradation, reactive transformation and advective transport redistribute
contaminants deeper within the soil profile, demonstrating that surface decline
does not necessarily correspond to reduced groundwater risk.
</p>

</div>

<!-- ====================================================== -->
<!-- Reaction Kinetics -->
<!-- ====================================================== -->

<div class="grid md:grid-cols-2 gap-10 items-start">

<div class="space-y-4">

<h2 class="text-xl font-semibold">Reaction Kinetics Model</h2>

<p>
Before coupling chemistry with subsurface flow, degradation behaviour was
analysed using a well-mixed reaction kinetics model. This simplified system
isolates chemical transformation pathways without spatial transport effects.
</p>

<p>
The model represents sequential oxidation of the pesticide compound into
two principal degradation products: <strong>aldicarb sulfoxide</strong> and
<strong>aldicarb sulfone</strong>. These reactions determine how toxicity
and persistence evolve through time.
</p>

<p>
The resulting rate constants were incorporated into the transport simulation
to ensure that plume evolution reflects chemically realistic degradation
behaviour.
</p>

</div>

<div class="space-y-2">

<img src="{{ '/assets/images/comsol/comsol001_002.png' | relative_url }}"
class="rounded-xl w-full max-w-md mx-auto">

<p class="text-sm text-slate-500 text-center">
<strong>Figure 2.</strong> Reaction kinetics simulation showing sequential transformation of the
parent pesticide compound into sulfoxide and sulfone degradation products.
Transient accumulation of the sulfoxide intermediate demonstrates that
chemical reactions can temporarily increase environmental toxicity before
long-term detoxification occurs.
</p>

</div>

</div>

<!-- ====================================================== -->
<!-- Governing Equations -->
<!-- ====================================================== -->

<div class="space-y-4">

<h2 class="text-xl font-semibold">Governing Equations</h2>

<p>
The reactive transport simulation couples unsaturated groundwater flow
with multi-species solute transport and first-order degradation reactions.
</p>

<div class="grid md:grid-cols-2 gap-10 items-start">

<div class="space-y-2">

<h3 class="font-semibold">Unsaturated Flow (Richards Equation)</h3>

<p>
∂θ/∂t = ∇ · [ K(θ) ∇(h + z) ]
</p>

<p class="text-sm text-slate-500">
Describes transient water flow in variably saturated soil where hydraulic
conductivity depends on water content.
</p>

</div>

<div class="space-y-2">

<h3 class="font-semibold">Solute Transport (Advection–Dispersion–Reaction)</h3>

<p>
∂C/∂t = ∇·(D∇C) − v·∇C − kC
</p>

<p class="text-sm text-slate-500">
Represents contaminant migration through advection and dispersion with
first-order degradation reactions governing chemical transformation.
</p>

</div>

</div>

</div>

<!-- ====================================================== -->
<!-- Model Geometry -->
<!-- ====================================================== -->

<div class="grid md:grid-cols-2 gap-10 items-start">

<div class="space-y-4">

<h2 class="text-xl font-semibold">Model Geometry and Boundary Conditions</h2>

<p>
The transport model represents a layered soil system beneath a ponded
infiltration source. An axisymmetric geometry allows radial spreading
of the contaminant plume while maintaining computational efficiency.
</p>

<ul class="list-disc pl-6 space-y-2">

<li>Layered soil profile with distinct hydraulic properties</li>
<li>Ponded infiltration boundary representing pesticide application</li>
<li>Infinite element domain to prevent artificial edge effects</li>
<li>Reactive solute transport within the soil matrix</li>

</ul>

</div>

<div class="space-y-2">

<img src="{{ '/assets/images/comsol/comsol001_001.png' | relative_url }}"
class="rounded-xl w-full max-w-md mx-auto">

<p class="text-sm text-slate-500 text-center">
<strong>Figure 3.</strong> Axisymmetric model geometry representing infiltration beneath a
surface source. Infinite element boundaries extend the domain beyond
the modelled region to prevent artificial plume confinement and allow
realistic representation of contaminant migration.
</p>

</div>

</div>

<!-- ====================================================== -->
<!-- Hydraulic Controls -->
<!-- ====================================================== -->

<div class="grid md:grid-cols-2 gap-10 items-start">

<div class="space-y-4">

<h2 class="text-xl font-semibold">Hydraulic Controls on Contaminant Migration</h2>

<p>
Water infiltration generates strong vertical hydraulic gradients
beneath the source location, driving advective transport of dissolved
contaminants through the soil profile.
</p>

<p>
As pressure equilibrates laterally, plume spreading increases,
expanding the spatial footprint of contamination.
</p>

</div>

<div class="space-y-2">

<img src="{{ '/assets/images/comsol/comsol001_004a.png' | relative_url }}"
class="rounded-xl w-full max-w-md mx-auto">

<p class="text-sm text-slate-500 text-center">
<strong>Figure 4.</strong> Pressure head distribution beneath the infiltration source.
Vertical hydraulic gradients drive downward contaminant migration,
while lateral pressure equilibration promotes radial plume expansion.
Hydraulic structure therefore controls the depth and extent of
subsurface contamination.
</p>

</div>

</div>

<!-- ====================================================== -->
<!-- Species Behaviour -->
<!-- ====================================================== -->

<div class="space-y-8">

<h2 class="text-xl font-semibold">Species-Specific Transport Behaviour</h2>

<div class="grid md:grid-cols-3 gap-8 text-center">

<div>

<img src="{{ '/assets/images/comsol/comsol001_005c.gif' | relative_url }}"
class="rounded-lg">

<p class="text-sm text-slate-500 mt-2">
<strong>Figure 5.</strong> Simulated distribution of the parent pesticide compound.
Rapid degradation near the infiltration source limits long-distance
transport of the original contaminant over 10 days.
</p>

</div>

<div>

<img src="{{ '/assets/images/comsol/comsol001_006c.gif' | relative_url }}"
class="rounded-lg">

<p class="text-sm text-slate-500 mt-2">
<strong>Figure 6.</strong> 10-day distribution of the sulfoxide degradation product.
Greater mobility allows this intermediate species to spread over a
larger soil volume than the parent compound, expanding the
contamination footprint.
</p>

</div>

<div>

<img src="{{ '/assets/images/comsol/comsol001_007c.gif' | relative_url }}"
class="rounded-lg">

<p class="text-sm text-slate-500 mt-2">
<strong>Figure 7.</strong> Distribution of the sulfone degradation product over 10 days.
This secondary product persists at greater depths even as surface
concentrations decline, increasing the potential for groundwater
interaction during prolonged infiltration.
</p>

</div>

</div>

</div>

<!-- ====================================================== -->
<!-- Model Assumptions -->
<!-- ====================================================== -->
<div class="grid md:grid-cols-3 gap-8">

<div class="space-y-6">

<h2 class="text-xl font-semibold">Model Assumptions</h2>

<ul class="list-disc pl-6 space-y-3">

<li>Soil layers represented as homogeneous hydraulic media.</li>

<li>Degradation reactions modelled using first-order kinetics.</li>

<li>Constant infiltration rate imposed at the surface boundary.</li>

<li>Sorption behaviour represented using equilibrium partitioning.</li>

<li>Temperature and microbial activity assumed spatially uniform.</li>

</ul>

</div>

<!-- ====================================================== -->
<!-- Limitations -->
<!-- ====================================================== -->

<div class="space-y-6">

<h2 class="text-xl font-semibold">Model Limitations</h2>

<ul class="list-disc pl-6 space-y-3">

<li>Field heterogeneity and preferential flow paths are not explicitly represented.</li>

<li>Reaction rates are assumed constant and do not account for biological variability.</li>

<li>Long-term climatic variability and episodic rainfall events are not simulated.</li>

<li>Parameter uncertainty was not propagated through probabilistic analysis.</li>

</ul>

</div>

<!-- ====================================================== -->
<!-- Key Insights -->
<!-- ====================================================== -->

<div class="space-y-6">

<h2 class="text-xl font-semibold">Key Insights</h2>

<ul class="list-disc pl-6 space-y-3">

<li>Degradation does not necessarily reduce groundwater risk.</li>

<li>Intermediate transformation products can be more mobile than the parent compound.</li>

<li>Hydraulic gradients strongly control plume penetration depth.</li>

<li>Coupled reaction–transport modelling is required for realistic risk assessment.</li>

</ul>

</div>

<!-- Footnote spanning both columns -->
  <p class="col-span-1 md:col-span-3 text-xs text-gray-400 dark:text-gray-500 italic pt-4 border-t border-gray-200 dark:border-slate-700">
    <span class="font-medium">Note:</span>
    This model builds on structured COMSOL training workflows and extends them to explore environmental transport behaviour and interpretation.
  </p>
<!-- </section> -->